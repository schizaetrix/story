// -------------------------------------------------
import React, { Component } from 'react'
// -------------------------------------------------

class GoogleAuth extends Component {
    render () {                                             // Fix ..    
        return (                                            // eslint-disable-next-line
            <a 
                className="
                    waves-effect 
                    waves-light
                    btn-flat black-text
                "
                style={{ 
                    margin: '20px', 
                    marginRight: '30px' 
                }}
                href={this.props.onClick}
            >
                {this.props.authAction}
            </a>
        )
    }
}

// -------------------------------------------------
export default GoogleAuth
// -------------------------------------------------