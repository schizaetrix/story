// -------------------------------------------------
const _ = require('lodash')
const { Path } = require('path-parser')
const { URL } = require('url')
const mongoose = require('mongoose')
// -------------------------------------------------
const Node = mongoose.model('nodes')                            // Fix: mongoose may throw up errors during testing if a model file is required in multiple times. Requiring models in this way avoids that issue
const User = mongoose.model('users')
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Mailer = require('../services/Mailer')
const nodeTemplate = require('../services/emailTemplates/nodeTemplate')
// -------------------------------------------------

module.exports = (app) => {
    app.get(
        '/api/nodes',
        requireLogin,
        async (req, res) => {
            const nodes = await Node.find({
                $or: [
                    { _user: req.user.id },
                    { _opponent: req.user.id }
                ]
            })
                .select({
                    dateSent: false,
                    lastResponded: false,
                    __v: false
                })
            res.send(nodes)
        }
    )
    
    app.post(
        '/api/nodes/first',
        requireLogin, requireCredits,
        async (req, res) => {
            const { 
                title, subject, body, image, key,
                recipients, children
            } = req.body
            const recipientsArray = recipients
                .split(',')
                .map((email) => ({ email: email.trim() }))
            const node = new Node({
                title, subject, body, image, key, children,
                recipients: recipientsArray, 
                _user: req.user.id,
                opponent: await User.findOne({
                    email: recipientsArray[0].email
                }),
                dateSent: Date.now()
            })
            const mailer = new Mailer(node, nodeTemplate(node))
            try {
                await mailer.send()
                await node.save()
                req.user.credits -= 1
                const user = await req.user.save()              // Note: we save the user model instance into a new user object, because the previous one is considered stale
                res.send(user)
            } catch (err) {
                res.status(422).send(err)
            }
        }
    )

    app.get(
        '/api/nodes/:nodeId/:key/:chosen', 
        (req, res) => {                                         // Todo: this needs to be reconfigured as the score page that redirects the user back to their email for the next step in the story
            const url = req.originalUrl                         // Todo: here is where we would set up logic to remove lives, calculate score, etc...
            const email = req.user.email
            const path = new Path('/api/nodes/:nodeId/:key/:chosen')
            const match = path.test(url)
            console.log(match)

            // const node = new Node({
            //     title, subject, body, image,
            //     choiceA, choiceB,
            //     recipients: email
            // })
            
            res.send('Thanks for your feedback!')               // Note: remember, you can use res.redirect() here to send to a client-side route.
        }
        
    )

    app.post(
        '/api/nodes/webhooks',
        (req, res) => {
            const p = new Path('/api/nodes/:nodeId/:key/:chosen')
            _.chain(req.body)
                .map(({ email, url }) => {
                    const match = p.test(
                        new URL(url).pathname
                    )
                    if (match) {
                        return { 
                            email, 
                            nodeId: match.nodeId,
                            key: match.key,
                            chosen: match.chosen
                        }
                    }
                })
                .compact()
                .uniqBy('email', 'nodeId')
                .each(({ nodeId, email, chosen }) => {
                    Node.updateOne({
                        _id: nodeId,
                        recipients: {
                            $elemMatch: { 
                                email: email,
                                responded: false
                            }
                        }
                    }, {
                        $set: { 
                            'recipients.$.responded': true,
                            'recipients.$.chosen': chosen,
                        },
                        lastResponded: new Date()
                    }).exec()
                })
                .value()
            res.send({})
        }
    )
}
// -------------------------------------------------