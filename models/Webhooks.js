// -------------------------------------------------
const mongoose = require('mongoose')
const { Schema } = mongoose
// -------------------------------------------------

const webhookSchema = new Schema({
    sgEventId: String
})

// -------------------------------------------------
mongoose.model('webhooks', webhookSchema)
// -------------------------------------------------