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
        this.interval = setInterval(this.props.fetchTree, 10000)
    }
    componentWillUnmount () {
        clearInterval(this.interval)
    }
    renderRow2 () {
        var props = this.props.tree
        return _.map(row2Props, ({ text, image, key }) => {
            return (
                <NodeRow2 
                    text={text}
                    image={image}
                    key={key}
                    classState={props ? props.playerTwo[key].hasVisited : false}
                />
            )
        }).reverse()
    }
    renderRow3 () {
        var props = this.props.tree
        return _.map(row3Props, ({ text, image, key }) => {
            return (
                <NodeRow3 
                    text={text}
                    image={image}
                    key={key}
                    classState={props ? props.playerTwo[key].hasVisited : false}
                />
            )
        }).reverse()
    }
    renderRow4 () {
        var props = this.props.tree
        return _.map(row4Props, ({ text, image, key }) => {
            return (
                <NodeRow4 
                    text={text}
                    image={image}
                    key={key}
                    classState={props ? props.playerTwo[key].hasVisited : false}
                />
            )
        }).reverse()
    }
    render () {
        var props = this.props.tree
        return (
            <div 
                className="container" 
                style={{ width: '100vw' }}
            >
                <div className="row">
                    <NodeRow0 
                        image={nodeProps[0].image}
                        text={nodeProps[0].text}
                        key={nodeProps[0].key}
                        classState={props ? props.playerTwo[1].hasVisited : false}
                    />
                </div>
                <div className="row"  style={{ marginBottom: '40px' }}>
                    <NodeRow1 
                        image={nodeProps[2].image}
                        text={nodeProps[2].text}
                        key={nodeProps[2].key}
                        classState={props ? props.playerTwo[3].hasVisited : false}
                    />
                    <NodeRow1 
                        image={nodeProps[1].image}
                        text={nodeProps[1].text}
                        key={nodeProps[1].key}
                        classState={props ? props.playerTwo[2].hasVisited : false}
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