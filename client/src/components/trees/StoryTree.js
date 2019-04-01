// -------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css'
// -------------------------------------------------
import { fetchTree } from '../../actions'
import Matrix from '../../assets/images/matrix.jpg'
import TreePlayerOne from './TreePlayerOne'
import TreePlayerTwo from './TreePlayerTwo'
import CenterNav from '../CenterNav'
import NewStoryBtn from '../NewStoryBtn'
// -------------------------------------------------

class StoryTree extends Component {
    componentDidMount () {
        const scrollspy = document.querySelectorAll('.scrollspy')
        const options = {
            scrollOffset: 75
        }
        M.ScrollSpy.init(scrollspy, options)
        const parallax = document.querySelectorAll('.parallax')
        M.Parallax.init(parallax, {})
        this.props.fetchTree()
    }
    scrollspyPlayer1 () {
        switch (this.props.tree) {
        case undefined:
                return (
                    <li key="a">
                        <a href="#tree-one"  className="active">
                            Player 1
                        </a>
                    </li>
                )
            default:
                return (
                    <li key="a">    
                        <a href="#tree-one" className="active">
                            {this.props.tree.playerOne ? 
                                this.props.tree.playerOne.player[0].userName :
                                'Player 1'
                            }
                        </a>
                    </li>
                )
        }
    }
    scrollspyPlayer2 () {
        switch (this.props.tree) {
            case undefined:
                return (
                    <li key="b">
                        <a href="#tree-two">
                            Player 2
                        </a>
                    </li>
                )
            default:
                return (
                    <li key="b">    
                        <a href="#tree-two">
                            {this.props.tree.playerTwo ? 
                                this.props.tree.playerTwo.player[0].userName :
                                'Player 2'
                            }
                        </a>
                    </li>
                )
        }
    }
    render () {
        return (
            <div className="row">
                <div>
                    <ul className="section table-of-contents">
                        {this.scrollspyPlayer1()}
                        {this.scrollspyPlayer2()}
                    </ul>
                </div>
                <div>
                    <div 
                        className="
                            parallax-container center 
                            valign-wrapper scrollspy"
                        id="tree-one"
                    >
                        <TreePlayerOne />
                        <div className="parallax">
                            <img 
                                src={Matrix} 
                                alt="matrix"
                            />
                        </div>
                    </div>
                    <CenterNav />
                    <div 
                        className="
                            parallax-container center 
                            valign-wrapper scrollspy"
                        id="tree-two"
                    >
                        <TreePlayerTwo />
                        <div className="parallax">
                            <img 
                                src={Matrix} 
                                alt="matrix"
                            />
                        </div>
                    </div>
                </div>
                <NewStoryBtn />
            </div>
        )
    }
}

// -------------------------------------------------
function mapStateToProps ({ auth, tree }) {
    return {
        auth,
        tree: tree[0]
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchTree }
)(StoryTree)
// -------------------------------------------------