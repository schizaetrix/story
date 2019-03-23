// -------------------------------------------------
const passport = require('passport')
// -------------------------------------------------

module.exports = (app) => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {                   // Note: 'google is the internal passport identifier for GoogleStrategy
            scope: ['profile', 'email']                     // Note:'profile' and 'email' are passport's scope identifiers
        })
    )
    app.get(
        '/auth/google/callback',                            // Note: redirect URI given to Google
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/storytree')                      // Done: change the redirect route once we know a better one to send to
        }
    )
    app.get('/api/current_user', (req, res) => {            // Note: sends User model instance from passport flow in 'req.user' object
        res.send(req.user)
    })
    app.get('/api/logout', (req, res) => {
        req.logout()
        res.redirect('/')
    })
}

// -------------------------------------------------