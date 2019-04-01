// -------------------------------------------------
const mongoose = require('mongoose')
const { Path } = require('path-parser')
// -------------------------------------------------
const Node = mongoose.model('nodes')                            // Fix: mongoose may throw up errors during testing if a model file is required in multiple times. Requiring models in this way avoids that issue
const User = mongoose.model('users')
const Tree = mongoose.model('trees')
const Webhook = mongoose.model('webhooks')
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const chosenParse = require('../middlewares/chosenParse')
const deathParse = require('../middlewares/deathParse')
const winParse = require('../middlewares/winParse')
const Mailer = require('../services/Mailer')
const nodeTemplateFirst = require('../services/emailTemplates/nodeTemplateFirst')
// -------------------------------------------------

module.exports = (app) => {
    app.get(
        '/api/nodes',
        requireLogin,
        async (req, res) => {
            const nodes = await Node.find({
                $or: [
                    { _user: req.user.id },
                    { playerTwo: {
                        $elemMatch: {
                            _id: req.user.id
                        }
                    } }
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
        '/api/tree',
        requireLogin,
        async (req, res) => {
            const tree = await Tree.find({
                $or: [
                    { 'playerOne.player': {
                        $elemMatch: {
                            email: req.user.email
                        }
                    } },
                    { 'playerTwo.player': {
                        $elemMatch: {
                            email: req.user.email
                        }
                    } }
                ]                                     
            })
            res.send(tree)
        }
    )

    app.post(
        '/api/nodes/first',
        requireLogin, requireCredits,
        async (req, res) => {
            const { 
                title, subject, body, image, key,
                recipients, children, gchilds0, gchilds1
            } = req.body
            const treeSessionGen = Math.floor(Math.random() * 1000) + 1
            const recipientsArray = recipients
                .split(',')
                .map((email) => ({ email: email.trim() }))
            const node = new Node({
                title, subject, body, image, key, 
                children, gchilds0, gchilds1,
                recipients: recipientsArray, 
                treeSession: treeSessionGen,
                _user: req.user.id,
                playerOne: await User.findOne({
                    email: recipientsArray[1].email
                }),
                playerTwo: await User.findOne({
                    email: recipientsArray[0].email
                }),
                dateSent: Date.now()
            })
            const mailer = new Mailer(node, nodeTemplateFirst(node))
            const tree = new Tree({
                treeSession: treeSessionGen,
                gameOn: true,
                playerOne: {
                    player: await User.findOne({
                        email: recipientsArray[1].email
                    })
                },
                playerTwo: {
                    player: await User.findOne({
                        email: recipientsArray[0].email
                    })
                }
            })
            try {
                await mailer.send()
                await node.save()
                await tree.save()
                req.user.credits -= 1
                const user = await req.user.save()              // Note: we save the user model instance into a new user object, because the previous one is considered stale
                res.send(user)
            } catch (err) {
                res.status(422).send(err)
            }
        }
    )

    app.get(
        '/api/nodes/:treeId/:nodeId/:nodeKey/:chosen/:gchild1/:gchild2/path',
        (req, res) => {
            const path = new Path('/api/nodes/:treeId/:nodeId/:nodeKey/:chosen/:gchild1/:gchild2/path')
            const match = path.test(req.originalUrl)
            if (match) {
                res.redirect(`/story/${match.chosen}/path`)
            }
        }
    )

    app.get(
        '/api/nodes/:treeId/:nodeId/:key/:chosen/death',
        (req, res) => {
            const path = new Path('/api/nodes/:treeId/:nodeId/:key/:chosen/death')
            const match = path.test(req.originalUrl)
            if (match) {
                res.redirect(`/story/${match.chosen}/death`)
            }
        }
    )

    app.get(
        '/api/nodes/:treeId/:nodeId/:key/:chosen/win',
        (req, res) => {
            const path = new Path('/api/nodes/:treeId/:nodeId/:key/:chosen/win')
            const match = path.test(req.originalUrl)
            if (match) {
                res.redirect(`/story/${match.chosen}/win`)
            }
        }
    )

    app.post(
        '/api/nodes/webhooks',                                  // Done: create a de-duplication model to filter webhook events before they ever go to the path parser middlewares
        async (req, res, next) => {
            const existingWebhook = await Webhook.findOne({
                sgEventId: req.body[0].sg_event_id
            })
            if (!existingWebhook) {
                const webhook = new Webhook({
                    sgEventId: req.body[0].sg_event_id
                })
                try { await webhook.save() } 
                catch (err) { res.status(422).send(err) }
                next()
            } else { res.end() }
        },
        deathParse, winParse, chosenParse
    )
}
// -------------------------------------------------