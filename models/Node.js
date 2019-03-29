// -------------------------------------------------
const mongoose = require('mongoose')
const { Schema } = mongoose
// -------------------------------------------------
const Recipient = require('./Recipient')
const Player = require('./Player')
// -------------------------------------------------

const nodeSchema = new Schema({
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    playerOne: [Player],                                   // Note: For future reference, this probably did not need to be an array... 
    playerTwo: [Player],
    title: String,
    subject: String,
    body: String,
    image: String,
    key: Number,
    children: [],
    recipients: [Recipient],                                // Done: determine if RecipientSchema needs to be an array in order for subdocumenting to work properly
    dateSent: Date,
    lastResponded: Date
})

// -------------------------------------------------
mongoose.model('nodes', nodeSchema)
// -------------------------------------------------