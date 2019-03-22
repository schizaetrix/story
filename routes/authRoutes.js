// -------------------------------------------------
const passport = require('passport')
// -------------------------------------------------

module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {                   // 'google is the internal passport identifier for GoogleStrategy
            scope: ['profile', 'email']                     // 'profile' and 'email' are passport's scope identifiers
        })
    )
    app.get(
        '/auth/google/callback',                            // redirect URI given to Google
        passport.authenticate('google'),
    )
    app.get('/api/current_user', (req, res) => {             // sends User model instance from passport flow in 'req.user' object
        res.send(req.user)
    })
    app.get('/api/logout', (req, res) => {
        req.logout()
        res.send('You have been logged out.')
    })
}

// -------------------------------------------------