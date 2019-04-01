// -------------------------------------------------
import React, { Component } from 'react'
// -------------------------------------------------

class NodeRow0 extends Component {
    render () {
        return (
            <div className="col s12 node-col node">
                <img 
                    className={`z-depth-3 scale-transition 
                        ${ this.props.classState ? 'scale-in' : 'scale-out' }
                    `}
                    src={this.props.image}
                    alt={this.props.text}
                    style={{ 
                        width: '26%',
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
export default NodeRow0
// -------------------------------------------------