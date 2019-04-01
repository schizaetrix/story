// -------------------------------------------------
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// -------------------------------------------------

class NewStoryBtn extends Component {
    componentDidMount () {
        const noCreditsTooltip = document.getElementById('no-credits')
        M.Tooltip.init(noCreditsTooltip, {})
        const startTreeTooltip = document.getElementById('start-tree')
        M.Tooltip.init(startTreeTooltip, {})
    }
    render () {
        switch (this.props.auth) {
            case null:
                return null
            default: 
                return ReactDOM.createPortal(
                    this.props.auth.credits ?
                        <Link 
                            className="
                                btn-floating btn-large
                                light-green darken-2
                                new-story-tree tooltipped"
                            to="/storynew"
                            id="start-tree"
                            data-position="left"
                            data-tooltip="Click here to start a new storyTree!"
                        >
                            <i 
                                className="material-icons black-text"
                            >
                                add
                            </i>
                        </Link>
                    :
                        <button 
                            className="
                                btn-floating btn-large
                                light-green darken-2
                                new-story-tree tooltipped"
                            id="no-credits"
                            data-position="left"
                            data-tooltip="You need credits to start a new storyTree!"
                        >
                            <i 
                                className="material-icons black-text"
                            >
                                close
                            </i>
                        </button>,
                    document.querySelector('#new-story')
                )
        }
    }
}

// -------------------------------------------------
function mapStateToProps ({ auth }) {
    return { auth }
}
// -------------------------------------------------
export default connect(
    mapStateToProps
)(NewStoryBtn)
// -------------------------------------------------