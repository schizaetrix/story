// -------------------------------------------------
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
// -------------------------------------------------
const keys = require('../config/keys')
// -------------------------------------------------

const User = mongoose.model('users')

passport.serializeUser((user, done) => {                    // Note: serialize is used to assign a cookie to the user
    done(null, user.id)                                     // Note: 'user.id' is NOT the googleID! It is the id assigned to the user item by MongoDB
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => { done(null, user) })
})

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true                                         // Note: fixes http(s) proxy issue
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ 
            googleId: profile.id 
        })
        if (existingUser) {
            return done(null, existingUser)                 // Note: the null argument is for error catch
        }
        const createUser = await new User({
            googleId: profile.id,
            userName: profile.name.givenName
        })
        .save()
        done(null, createUser)
    })
)

// -------------------------------------------------