// -------------------------------------------------
import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchNodes, fetchTree } from '../../actions'
import nodeProps, {
    row2Props, row3Props, row4Props
} from '../nodes/nodeProps'
import NodeRow0 from '../nodes/NodeRow0'
import NodeRow1 from '../nodes/NodeRow1'
import NodeRow2 from '../nodes/NodeRow2'
import NodeRow3 from '../nodes/NodeRow3'
import NodeRow4 from '../nodes/NodeRow4'
import player2TreeState from './player2TreeState'
// -------------------------------------------------

class TreePlayerTwo extends Component {
    state = {
        player2TreeState
    }
    componentDidMount () {
        this.props.fetchNodes()
        this.props.fetchTree()
    }
    renderRow2 () {
        return _.map(row2Props, ({ text, image }) => {
            return (
                <NodeRow2 
                    text={text}
                    image={image}
                    key={text}
                />
            )
        }).reverse()
    }
    renderRow3 () {
        return _.map(row3Props, ({ text, image }) => {
            return (
                <NodeRow3 
                    text={text}
                    image={image}
                    key={text}
                />
            )
        }).reverse()
    }
    renderRow4 () {
        return _.map(row4Props, ({ text, image }) => {
            return (
                <NodeRow4 
                    text={text}
                    image={image}
                    key={text}
                />
            )
        }).reverse()
    }
    render () {
        var props = this.props.tree
        props ? console.log(props.playerOne[1].isOpen) : console.log(props)
        return (
            <div 
                className="container" 
                style={{ width: '100vw' }}
            >
                <div className="row">
                    <NodeRow0 
                        image={nodeProps[0].image}
                        text={nodeProps[0].text}
                        key={nodeProps[0].text}
                    />
                </div>
                <div className="row"  style={{ marginBottom: '40px' }}>
                    <NodeRow1 
                        image={nodeProps[2].image}
                        text={nodeProps[2].text}
                        key={nodeProps[2].text}
                        classState={props ? props.playerOne[1].isOpen : props}
                    />
                    <NodeRow1 
                        image={nodeProps[1].image}
                        text={nodeProps[1].text}
                        key={nodeProps[1].text}
                        classState={props ? props.playerOne[1].isOpen : props}
                    />
                </div>
                <div className="row">
                    {this.renderRow2()}
                </div>
                <div className="row">
                    {this.renderRow3()}
                </div>
                <div className="row">
                    {this.renderRow4()}
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
function mapStateToProps ({ nodes, tree }) {
    return {
        nodes,
        tree: tree[0]
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchNodes, fetchTree }
)(TreePlayerTwo)
// -------------------------------------------------