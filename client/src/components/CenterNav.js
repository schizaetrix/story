// -------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchTree } from '../actions'
import Donations from './Donations'
// -------------------------------------------------

class CenterNav extends Component {
    componentDidMount () {
        this.props.fetchTree()
    }
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
    renderPlayerOne () {                                       // Fix: adding anything else to the center section renders everything in a single column. Attempting to separate them into columns messes up the parallax on the bottom half of the screen.
        switch (this.props.tree) {
            case undefined:
                return 'Welcome, Player 1!'
            default:
                return `PLAYER 1: ${
                    this.props.tree.playerOne ? 
                    this.props.tree.playerOne.player[0].userName : 
                    'Player 1'
                }  \u00A0\u00A0\u00A0\u00A0\u00A0 SCORE: ${
                    this.props.tree.playerOne ? 
                    this.props.tree.playerOne.player[0].score :
                    '0' 
                }   \u00A0\u00A0\u00A0\u00A0\u00A0 LIVES: ${
                    this.props.tree.playerOne ? 
                    this.props.tree.playerOne.player[0].lives :
                    '0' 
                }`
        }
    }
    renderPlayerTwo () {
        switch (this.props.tree) {
            case undefined:
                return 'Welcome, Player 2!'
            default:
                return `PLAYER 2: ${
                    this.props.tree.playerTwo ? 
                    this.props.tree.playerTwo.player[0].userName : 
                    'Player 1'
                }  \u00A0\u00A0\u00A0\u00A0\u00A0 SCORE: ${
                    this.props.tree.playerTwo ? 
                    this.props.tree.playerTwo.player[0].score :
                    '0' 
                }   \u00A0\u00A0\u00A0\u00A0\u00A0 LIVES: ${
                    this.props.tree.playerTwo ? 
                    this.props.tree.playerTwo.player[0].lives :
                    '0' 
                }`
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
                        key="1" style={{ margin: '2% 30px' }}>
                        <h6>{this.renderPlayerOne()}</h6>
                    </li>
                    <li key="2" style={{ paddingBottom: '10%' }}>
                        {this.renderCredits()}
                    </li>
                    <li key="3" style={{ margin: '2% 30px' }}>
                        <h6>{this.renderPlayerTwo()}</h6>
                    </li>
                </ul>
            </nav>
        )
    }
}

// -------------------------------------------------
function mapStateToProps ({ auth, tree, }) {
    return { 
        auth,
        tree: tree[0]
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchTree }
)(CenterNav)
// -------------------------------------------------

