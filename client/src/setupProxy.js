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
    app.use(
        proxy(
            '/api/surveys/:surveyId/:choice',
            { target: 'http://localhost:5000' }
        )
    )
}
// -------------------------------------------------