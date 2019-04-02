// -------------------------------------------------
const _ = require('lodash')
const { Path } = require('path-parser')
const { URL } = require('url')
const mongoose = require('mongoose')
// -------------------------------------------------
const Node = mongoose.model('nodes')
const User = mongoose.model('users')
const Tree = mongoose.model('trees')
const Mailer = require('../services/Mailer')
const nodeTemplate = require('../services/emailTemplates/nodeTemplate')
const Stories = require('../services/storyDB')
// -------------------------------------------------

const chosenParse = async (req, res) => {
    let storyNode = {}
    const path = new Path('/api/nodes/:treeId/:nodeId/:nodeKey/:chosen/:gchild1/:gchild2/path')
    _.chain(req.body)
        .map(({ email, url }) => {
            const match = path.test(
                new URL(url).pathname
            )
            if (match) {
                return { 
                    email,
                    treeId: match.treeId,
                    nodeId: match.nodeId,
                    nodeKey: match.nodeKey,
                    chosen: match.chosen,
                    gchild1: match.gchild1,
                    gchild2: match.gchild2
                }
            }
        })
        .compact()
        .uniqBy('email', 'nodeId')
        .each(async ({ treeId, nodeId, email, chosen, gchild1, gchild2 }) => {
            const treeFind = await Tree.findOne({
                treeSession: treeId
            })
            if (email == treeFind.playerOne.player[0].email) {
                Tree.updateOne({
                    treeSession: treeId,
                    'playerOne.player': {
                        $elemMatch: { email: email }
                    }
                }, {
                    $inc: {
                        'playerOne.player.$.score': 10
                    },
                    $set: {
                        [`playerOne.${gchild1}.isOpen`]: true,
                        [`playerOne.${gchild2}.isOpen`]: true,
                        [`playerOne.${chosen}.hasVisited`]: true,
                    }
                }).exec()
            } else if (email == treeFind.playerTwo.player[0].email) {
                Tree.updateOne({
                    treeSession: treeId,
                    'playerTwo.player': {
                        $elemMatch: { email: email }
                    }
                }, {
                    $inc: {
                        'playerTwo.player.$.score': 10
                    },
                    $set: {
                        [`playerTwo.${gchild1}.isOpen`]: true,
                        [`playerTwo.${gchild2}.isOpen`]: true,
                        [`playerTwo.${chosen}.hasVisited`]: true,
                    }
                }).exec()
            }
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
                    'recipients.$.chosen': chosen
                },
                lastResponded: new Date()
            }).exec()
            User.updateOne(
                { email: email },
                { $inc: { score: 10 } }
            ).exec()
            Object.values(Stories).forEach((story) => {
                if (story.key == chosen) {
                    storyNode = story
                }
            })
            const {
                title, subject, body, key, children, gchilds0, gchilds1
            } = storyNode
            const players = await Node.findOne({
                _id: nodeId
            })
            const node = new Node({
                title, subject, body, key, 
                children, gchilds0, gchilds1,
                image: storyNode.url,
                treeSession: treeId,
                recipients: [{ email }],
                playerOne: players.playerOne,
                playerTwo: players.playerTwo,
                dateSent: Date.now()
            })
            const mailer = new Mailer(node, nodeTemplate(node))
            try {
                await mailer.send()
                await node.save()
            } catch (err) { 
                res.status(422).send(err)
            }
        }).value()
}

// -------------------------------------------------
module.exports = chosenParse
// -------------------------------------------------