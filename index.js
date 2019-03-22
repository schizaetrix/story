// -------------------------------------------------
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
// -------------------------------------------------
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')                              // has to be required in AFTER MongoDB models!!!    
// -------------------------------------------------

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })  // gets rid of DeprecationWarning
const app = express()

// Middlewares
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())


require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)

// -------------------------------------------------