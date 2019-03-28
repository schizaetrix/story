// -------------------------------------------------
import React, { Component } from 'react'
// -------------------------------------------------

class NodeRow3 extends Component {
    render () {
        return (
            <div className="col s2 node-col node">
                <img 
                    className="z-depth-3"
                    src={this.props.image}
                    alt={this.props.text}
                    style={{ 
                        width: '90%',
                        borderRadius: '10%',
                        padding: '1px',
                        border: '2px solid green'
                    }}
                />
            </div>
        )
    }
}

// -------------------------------------------------
export default NodeRow3
// -------------------------------------------------