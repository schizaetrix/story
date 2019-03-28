// -------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import Donations from './Donations'
// -------------------------------------------------

class CenterNav extends Component {
    renderCredits () {
        switch (this.props.auth) {
            case null:
                return
            default:
                return (
                    <Donations 
                        credits={this.props.auth.credits}
                    />
                )
        }
    }
    renderPlayer () {                                       // Fix: adding anything else to the center section renders everything in a single column. Attempting to separate them into columns messes up the parallax on the bottom half of the screen.
        switch (this.props.auth) {
            case null:
                return 'Welcome, Player 1!'
            default:
                return `Welcome, ${this.props.auth.userName}!`
        }
    }
    renderOpponent () {
        switch (this.props.node) {
            case undefined:
                return 'Welcome, Player 2!'
            default:
                return `Welcome, ${this.props.node.opponent[0].userName}!`
        }
    }
    render () {
        return (
            <nav 
                className="
                    nav-wrapper light-green
                    darken-3 black-text z-depth-5"
                style={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    height: '75px'
                }}
            >
                <ul>
                    <li
                        key="1" style={{ margin: '3% 35px' }}
                    >
                        <h6>{this.renderPlayer()}</h6>
                    </li>
                    <li key="2" style={{ margin: '3px 15px' }}>
                        {this.renderCredits()}
                    </li>
                    <li key="3" style={{ margin: '3% 35px' }}>
                        <h6>{this.renderOpponent()}</h6>
                    </li>
                </ul>
            </nav>
        )
    }
}

// -------------------------------------------------
function mapStateToProps ({ auth, nodes }) {
    return { 
        auth,
        node: nodes[0]
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps
)(CenterNav)
// -------------------------------------------------

