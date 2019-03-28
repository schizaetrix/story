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

    app.get(
        '/api/nodes/:nodeId/:choice', 
        (req, res) => {                                         // Todo: this needs to be reconfigured as the score page that redirects the user back to their email for the next step in the story
            const url = req.originalUrl
            const path = new Path('/api/nodes/:nodeId/:choice')
            const match = path.test(url)
            console.log(match.choice)
            res.send('Thanks for your feedback!')               // Note: remember, you can use res.redirect() here to send to a client-side route. Remember, contents of req.body come from the action creator!
        }
        
    )
    
    app.post(
        '/api/nodes/first',
        requireLogin, requireCredits,
        async (req, res) => {
            const { 
                title, subject, body, image,
                recipients, choiceA, choiceB
            } = req.body
            const recipientsArray = recipients
                .split(',')
                .map((email) => ({ email: email.trim() }))
            const node = new Node({
                title, subject, body, image,
                choiceA, choiceB,
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

    app.post(
        '/api/nodes/webhooks',
        (req, res) => {
            const p = new Path('/api/nodes/:nodeId/:choice')
            _.chain(req.body)
                .map(({ email, url }) => {
                    const match = p.test(
                        new URL(url).pathname
                    )
                    if (match) {
                        return { 
                            email, 
                            nodeId: match.nodeId,
                            choice: match.choice
                        }
                    }
                })
                .compact()
                .uniqBy('email', 'nodeId')
                .each(({ nodeId, email, choice }) => {
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
                            'recipients.$.chose': choice,
                        },
                        lastResponded: new Date()
                    }).exec()
                })
                .value()
            res.send({})
        }
    )

    app.post(
        '/api/nodes/next',
        requireLogin,
        async (res, req) => {
            const {
                title, subject, body, 
                recipients, choiceA, choiceB
            } = req.body
            const node = new Node({
                title, subject, body,
                choiceA, choiceB,
                recipients: recipients.split(',').map(
                    (email) => ({ 
                        email: email.trim() 
                    })
                ),
                _user: req.user.id
            })
            const mailer = new Mailer(node, nodeTemplate(node))
            try {
                await mailer.send()
                await node.save()                               // Todo: here is where we would set up logic to remove lives, calculate score, etc...
                const user = await req.user.save()              // Note: we save the user model instance into a new user object, because the previous one is considered stale
                res.send(user)
            } catch (err) {
                res.status(422).send(err)
            }
        }
    )
}
// -------------------------------------------------