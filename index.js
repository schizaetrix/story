// -------------------------------------------------
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
// -------------------------------------------------
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')                              // Note: /services/passport has to be required in AFTER MongoDB models!!!    
// -------------------------------------------------

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })  // Fix: "useNewUrlParser" gets rid of DeprecationWarning
const app = express()

// Middlewares
app.use(bodyParser.json())
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))                 // Note: Express will serve up production assets from client/build
    const path = require('path')                            // Note: Express will serve up index.html for unrecognized routes
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(
            __dirname, 
            'client', 
            'build', 
            'index.html'
        ))
    })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)

// -------------------------------------------------