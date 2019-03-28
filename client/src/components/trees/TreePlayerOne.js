// -------------------------------------------------
import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchNodes } from '../../actions'
import nodeProps, {
    row2Props, row3Props, row4Props
} from '../nodes/nodeProps'
import NodeRow0 from '../nodes/NodeRow0'
import NodeRow1 from '../nodes/NodeRow1'
import NodeRow2 from '../nodes/NodeRow2'
import NodeRow3 from '../nodes/NodeRow3'
import NodeRow4 from '../nodes/NodeRow4'
// -------------------------------------------------

class TreePlayerOne extends Component {
    componentDidMount () {
        this.props.fetchNodes()
    }
    renderRow2 () {
        return _.map(row2Props, ({ text, image }) => {
            return (
                <NodeRow2 
                    text={text}
                    key={text}
                    image={image}
                />
            )
        })
    }
    renderRow3 () {
        return _.map(row3Props, ({ text, image }) => {
            return (
                <NodeRow3 
                    text={text}
                    key={text}
                    image={image}
                />
            )
        })
    }
    renderRow4 () {
        return _.map(row4Props, ({ text, image }) => {
            return (
                <NodeRow4 
                    text={text}
                    key={text}
                    image={image}
                />
            )
        })
    }
    render () {
        return (
            <div 
                className="container" 
                style={{ width: '100vw' }}
            >
            <div className="row">
                {this.renderRow4()}
            </div>
            <div className="row">
                {this.renderRow3()}
            </div>
            <div className="row">
                {this.renderRow2()}
            </div>
            <div className="row" style={{ marginTop: '40px' }}>
                <NodeRow1 
                    image={nodeProps[1].image}
                    text={nodeProps[1].text}
                    key={nodeProps[1].text}
                />
                <NodeRow1 
                    image={nodeProps[2].image}
                    text={nodeProps[2].text}
                    key={nodeProps[2].text}
                />
            </div>
            <div className="row">
                <NodeRow0
                    image={nodeProps[0].image}
                    text={nodeProps[0].text}
                    key={nodeProps[0].text}
                />
            </div>
        </div>
        )
    }
}

// -------------------------------------------------
function mapStateToProps ({ nodes }) {
    return { nodes }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchNodes }
)(TreePlayerOne)
// -------------------------------------------------