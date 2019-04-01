// -------------------------------------------------
const mongoose = require('mongoose')
const { Schema } = mongoose 
// -------------------------------------------------

const playerSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    userName: String,
    email: String,
    lives: {
        type: Number,
        default: 3
    },
    score: {
        type: Number,
        default: 0
    }
})

// -------------------------------------------------
module.exports = playerSchema
// -------------------------------------------------