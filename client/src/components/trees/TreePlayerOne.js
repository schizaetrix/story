// -------------------------------------------------
import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchTree } from '../../actions'
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
        this.props.fetchTree()
    }
    renderRow0 () {
        var props = this.props.tree
        return (
            <NodeRow0
                image={nodeProps[0].image}
                text={nodeProps[0].text}
                key={nodeProps[0].text}
                classState={props ? props.playerOne[1].hasVisited : false}
            />
        )
    }
    renderRow1 () {
        var props = this.props.tree
        return (
            <React.Fragment>
                <NodeRow1 
                    image={nodeProps[1].image}
                    text={nodeProps[1].text}
                    key={nodeProps[1].text}
                    classState={props ? props.playerOne[2].hasVisited : false}
                />
                <NodeRow1 
                    image={nodeProps[2].image}
                    text={nodeProps[2].text}
                    key={nodeProps[2].text}
                    classState={props ? props.playerOne[3].hasVisited : false}
                />
            </React.Fragment>
        )
    }
    renderRow2 () {
        var props = this.props.tree
        return _.map(row2Props, ({ text, image, key }) => {
            return (
                <NodeRow2 
                    text={text}
                    key={key}
                    image={image}
                    classState={props ? props.playerOne[key].hasVisited : false}
                />
            )
        })
    }
    renderRow3 () {
        var props = this.props.tree
        return _.map(row3Props, ({ text, image, key }) => {
            return (
                <NodeRow3 
                    text={text}
                    key={key}
                    image={image}
                    classState={props ? props.playerOne[key].hasVisited : false}
                />
            )
        })
    }
    renderRow4 () {
        var props = this.props.tree
        return _.map(row4Props, ({ text, image, key }) => {
            return (
                <NodeRow4 
                    text={text}
                    key={key}
                    image={image}
                    classState={props ? props.playerOne[key].hasVisited : false}
                />
            )
        })
    }
    renderGameOver () {
        var game = this.props.tree
        var playerOneLives = 
            game && game.playerOne ? game.playerOne.player[0].lives : undefined
        var playerTwoLives = 
            game && game.playerTwo ? game.playerTwo.player[0].lives : undefined

        if (playerOneLives <= 0) {
            return (
                <h1 
                    className="light-green-text text-darken-3"
                    style={{
                        textShadow: '2px 2px 1px #000',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <span 
                        style={{
                            backgroundColor: '#fff',
                            boxShadow: '0 0 5px 10px #fff',
                            borderRadius: '10px',
                            opacity: '0.75'
                        }}
                    >
                        {`${game.playerOne.player[0].userName} lost :(`}
                    </span>
                </h1>
            )
        } else if (playerTwoLives <= 0) {
            return (
                <h1 
                    className="light-green-text text-darken-3"
                    style={{
                        textShadow: '2px 2px 1px #000',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    <span 
                        style={{
                            backgroundColor: '#fff',
                            boxShadow: '0 0 5px 10px #fff',
                            borderRadius: '10px',
                            opacity: '0.75'
                        }}
                    >
                        {`${game.playerOne.player[0].userName} won!!`}
                    </span>
                </h1>
            )
        } else { return }
    }
    render () {
        return (
            <div 
                className="container" 
                style={{ 
                    width: '100vw',
                    position: 'relative',
                    textAlign: 'center'
                }}
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
                {this.renderRow1()}
            </div>
            <div className="row">
                {this.renderRow0()}
            </div>
            {this.renderGameOver()}
        </div>
        )
    }
}

// -------------------------------------------------
function mapStateToProps ({ tree }) {
    return {
        tree: tree[0]
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchTree }
)(TreePlayerOne)
// -------------------------------------------------