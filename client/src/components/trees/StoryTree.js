// -------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// -------------------------------------------------
import Matrix from '../../assets/images/matrix.jpg'
import TreePlayerOne from './TreePlayerOne'
import TreePlayerTwo from './TreePlayerTwo'
import CenterNav from '../CenterNav';
// -------------------------------------------------

class StoryTree extends Component {
    componentDidMount () {
        const parallax = document.querySelectorAll('.parallax')
        M.Parallax.init(parallax, {});
        const scrollspy = document.querySelectorAll('.scrollspy')
        const options = {
            scrollOffset: 75
        }
        M.ScrollSpy.init(scrollspy, options)
    }
    renderNewStoryBtn () {
        return (
            <div className="fixed-action-btn">
                <Link 
                    className="
                        btn-floating btn-large
                        light-green darken-2"
                    id="new-story-tree"
                    to="/storynew"
                >
                    <i className="material-icons black-text">
                        add
                    </i>
                </Link>
            </div>
        )
    }
    scrollspyPlayer1 () {
        switch (this.props.auth) {
            case null:
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
                            {this.props.auth.userName}
                        </a>
                    </li>
                )
        }
    }
    scrollspyPlayer2 () {
        switch (this.props.node) {
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
                            {this.props.node.opponent[0].userName}
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
                {this.renderNewStoryBtn()}
            </div>
        )
    }
}

// -------------------------------------------------
function mapStateToProps ({ auth, nodes }) {
    return { 
        auth,
        node: nodes[nodes.length - 1]
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps
)(StoryTree)
// -------------------------------------------------