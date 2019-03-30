// -------------------------------------------------
const mongoose = require('mongoose')
const { Schema } = mongoose                                 // Note: deconstruction of "const Schema = mongoose.Schema"
// -------------------------------------------------

const userSchema = new Schema({
    googleId: String,
    userName: String,
    email: String,
    credits: {
        type: Number,
        default: 0
    },
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
mongoose.model('users', userSchema)
// -------------------------------------------------