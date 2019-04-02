// -------------------------------------------------
import React, { Component } from 'react'
import M from 'materialize-css'
// -------------------------------------------------
// import Tree1 from '../../assets/images/Tree1.svg'
// -------------------------------------------------

class NodeRow0 extends Component {
    componentDidMount () {
        const nodeTooltip = document.getElementById('node-tooltip')
        M.Tooltip.init(nodeTooltip, {})
    }
    render () {
        return (
            <div className="col s12 node-col node">
                <img 
                    className={`z-depth-3 hover-class scale-transition tooltipped
                        ${ this.props.classState ? 'scale-in' : 'scale-out' }
                    `}
                    // id="node-tooltip"        // Hold: will implement tooltips later...
                    data-position="top"
                    data-tooltip="tooltip test"
                    src={this.props.image}
                    alt={this.props.text}
                    style={{ 
                        width: '26%',
                        borderRadius: '10%',
                        padding: '1px',
                        border: '2px solid #558b2f'
                    }}
                />
            </div>
        )
    }
}

// -------------------------------------------------
export default NodeRow0
// -------------------------------------------------