// -------------------------------------------------
const mongoose = require('mongoose')
const { Schema } = mongoose
// -------------------------------------------------
const Recipient = require('./Recipient')
const Opponent = require('./Opponent')
// -------------------------------------------------

const nodeSchema = new Schema({
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    opponent: [Opponent],                               // Note: For future reference, this probably did not need to be an array... 
    title: String,
    subject: String,
    body: String,
    image: String,
    node: String,
    recipients: [Recipient],                             // Done: determine if RecipientSchema needs to be an array in order for subdocumenting to work properly
    choiceA: { 
        type: String,
        default: 'Choice A' 
    },
    choiceB: {
        type: String,
        default: 'Choice B'
    },
    dateSent: Date,
    lastResponded: Date
})

// -------------------------------------------------
mongoose.model('nodes', nodeSchema)
// -------------------------------------------------