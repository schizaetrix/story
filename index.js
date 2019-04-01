// -------------------------------------------------
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
// -------------------------------------------------
const keys = require('./config/keys')
// -------------------------------------------------

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })  // Fix: "useNewUrlParser" gets rid of DeprecationWarning
const app = express()

// General middlewares
app.use(bodyParser.json())                                  // Note: these middleswares are for all routes; for specific routes, look in middlewares directory 
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

// Models
require('./models/User')
require('./models/Node')
require('./models/Tree')
require('./models/Webhooks')
require('./services/passport')                              // Note: /services/passport has to be required in AFTER MongoDB models!!!    

// Routes
require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/storyRoutes')(app)

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