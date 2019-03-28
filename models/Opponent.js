// -------------------------------------------------
const mongoose = require('mongoose')
const { Schema } = mongoose 
// -------------------------------------------------

const opponentSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    userName: String
})

// -------------------------------------------------
module.exports = opponentSchema
// -------------------------------------------------