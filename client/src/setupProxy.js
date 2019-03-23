// -------------------------------------------------
const proxy = require('http-proxy-middleware');             // Fix: this proxy allows us to use relative links in the client dev environment
// -------------------------------------------------

// -------------------------------------------------
module.exports = function(app) {
    app.use(
        proxy(
            '/auth/google', 
            { target: 'http://localhost:5000' }
        )
    )
    app.use(
        proxy(
            '/api/**',
            { target: 'http://localhost:5000' }
        )
    )
    app.use(                                                // Todo: remember to test out the proxy before this one. If it works, remove this proxy.
        proxy(                                              // Todo: if the above route does NOT work, remember the change the path of this one. We're not doing surveys here!
            '/api/surveys/:surveyId/:choice',
            { target: 'http://localhost:5000' }
        )
    )
}
// -------------------------------------------------