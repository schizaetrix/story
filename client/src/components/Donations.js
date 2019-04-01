// -------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
// -------------------------------------------------
import { handleToken } from '../actions'
// -------------------------------------------------

class Donations extends Component {
    render () {                                             // Fix: button's z-index makes it unclickable when aligned with navbar
        return (
            <StripeCheckout 
                name="storyTree"
                description="$5 for 5 story credits" 
                amount={500}
                token={(token) => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button 
                    className="
                        btn light-green
                        darken-2 black-text"
                    id="credits-button"
                >
                    {this.props.credits} Credits Left!
                </button>
            </StripeCheckout>
        )
    }
}

// -------------------------------------------------
export default connect(
    null, 
    { handleToken }
)(Donations)
// -------------------------------------------------