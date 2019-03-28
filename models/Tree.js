// -------------------------------------------------
const mongoose = require('mongoose')
const { Schema } = mongoose
// -------------------------------------------------
const NodeSchema = require('./Node')
const NodeToggle = require('./NodeToggle')
// -------------------------------------------------

const treeSchema = new Schema({                             // Hold: this schema is for a future feature and is currently not in use.
    playerOne: {
        _user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        email: String,
        node01: {
            storyNode: [NodeSchema]
        },
        node02: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node03: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node04: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node05: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node06: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node07: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node08: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node09: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node10: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node11: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node12: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node13: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node14: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node15: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node16: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node17: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node18: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node19: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node20: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node21: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
    },
    playerTwo: {
        _user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        email: String,
        node01: {
            storyNode: [NodeSchema]
        },
        node02: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node03: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node04: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node05: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node06: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node07: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node08: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node09: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node10: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node11: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node12: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node13: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node14: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node15: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node16: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node17: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node18: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node19: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node20: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
        node21: {
            toggles: [NodeToggle],
            storyNode: [NodeSchema]
        },
    }
})

// -------------------------------------------------
mongoose.model('trees', treeSchema)
// -------------------------------------------------