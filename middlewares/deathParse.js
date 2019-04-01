// -------------------------------------------------
const _ = require('lodash')
const { Path } = require('path-parser')
const { URL } = require('url')
const mongoose = require('mongoose')
// -------------------------------------------------
const Tree = mongoose.model('trees')
const Node = mongoose.model('nodes')
// const User = mongoose.model('users')
// -------------------------------------------------

const deathParse = async (req, res, next) => {
    const path = new Path('/api/nodes/:treeId/:nodeId/:key/:chosen/death')
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
                    key: match.key,
                    chosen: match.chosen
                }
            }
        })
        .compact()
        .uniqBy('email', 'nodeId')
        .each(async ({ treeId, nodeId, email, chosen }) => {
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
                        'playerOne.player.$.score': -5,
                        'playerOne.player.$.lives': -1
                    },
                    $set: {
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
                        'playerTwo.player.$.score': -5,
                        'playerTwo.player.$.lives': -1
                    },
                    $set: {
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
            // User.updateOne(                          // Hold: might need to keep/modify this in order to create a requireLives middleware
            //     { email: email },
            //     { $inc: { lives: -1, score: -5 } }
            // ).exec()
        }).value()
    next()
}

// -------------------------------------------------
module.exports = deathParse
// -------------------------------------------------