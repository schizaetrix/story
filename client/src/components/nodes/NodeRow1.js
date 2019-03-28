// -------------------------------------------------
import React, { Component } from 'react'
// -------------------------------------------------

class NodeRow1 extends Component {
    render () {
        return (
            <div className="col s6 node-col node">
                <img 
                    className="z-depth-3"
                    src={this.props.image}
                    alt={this.props.text}
                    style={{
                        width: '43%',
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
export default NodeRow1
// -------------------------------------------------