// -------------------------------------------------
const mongoose = require('mongoose')
const { Schema } = mongoose
// -------------------------------------------------

const recipientSchema = new Schema({
    email: String,
    responded: {
        type: Boolean,
        default: false
    },
    chose: String,
    nodeState: {
        isOpen: {
            type: Boolean,
            default: false
        },
        hasVisited: {
            type: Boolean,
            default: false
        },
        isDeath: {
            type: Boolean,
            default: false
        },
        gameOver: {
            type: Boolean,
            default: false
        }
    }
})

// -------------------------------------------------
module.exports = recipientSchema
// -------------------------------------------------