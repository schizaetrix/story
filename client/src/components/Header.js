// -------------------------------------------------
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// -------------------------------------------------
import GoogleAuth from './GoogleAuth'
// -------------------------------------------------

class Header extends Component {
    renderContent () {
        switch (this.props.auth) {
            case null:
                return
            case false:
                return (
                    <GoogleAuth 
                        onClick="/auth/google"
                        authAction="Log In"
                    />
                )
            default:
                return (
                    <GoogleAuth 
                        onClick="/api/logout"
                        authAction={`Log Out ${this.props.auth.userName}`}
                    />
                )
        }
    }
    render () {
        return (
            <nav 
                className="transparent z-depth-0 hide-on hide-on-small-only"
                style={{ position: 'fixed', zIndex: '100' }}
            >
                <div 
                    className="nav-wrapper"
                >
                    <Link 
                        to='/'
                        className="
                            brand-logo left
                            black-text"
                        style={{
                            marginLeft: '3%',
                        }}
                    >
                        storyTree
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

// -------------------------------------------------
function mapStateToProps ({ auth }) {
    return { auth }
}
// -------------------------------------------------
export default connect(
    mapStateToProps
)(Header)
// -------------------------------------------------