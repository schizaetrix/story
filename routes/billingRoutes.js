// -------------------------------------------------
const keys = require('../config/keys')                     // Note: keys must be required in BEFORE requiring Stripe and calling it with the stripe secretKey 
const stripe = require('stripe')(keys.stripeSecretKey)
// -------------------------------------------------
const requireLogin = require('../middlewares/requireLogin')
// -------------------------------------------------
module.exports = (app) => {
    app.post(
        '/api/stripe', 
        requireLogin, 
        async (req, res) => {
            const charge = await stripe.charges.create({
                amount: 500,
                currency: 'usd',
                description: '$5 for 5 credits',
                source: req.body.id
            })
            req.user.credits += 5                           // Note: remember, req.user is the User model instance that comes in from passport.
            const user = await req.user.save()
            res.send(user)
        }
    )
}
// -------------------------------------------------