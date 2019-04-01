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
    chosen: String
})

// -------------------------------------------------
module.exports = recipientSchema
// -------------------------------------------------