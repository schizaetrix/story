// -------------------------------------------------
import React, { Component } from 'react'
import { Path } from 'path-parser'
// -------------------------------------------------
import Stories from '../../assets/storyDB'
// -------------------------------------------------

class PathLanding extends Component {
    constructor (props) {
        super(props)
        const path = new Path('/story/:chosen/path')
        const match = path.test(window.location.pathname)
        const storyValues = Object.values(Stories)
        this.state = {
            nodeMatch: match.chosen,
            storyAssets: storyValues[match.chosen - 1]
        }
    }
    renderContent () {
        const story = this.state.storyAssets
        switch (story) {
            case undefined:
                return
            default:
                return (
                    <div>
                        <h3 className="light-green-text text-darken-3">
                            {story.title}
                        </h3>
                        <img 
                            src={story.image} 
                            alt={story.title}
                            style={{
                                width: '80%',
                                maxWidth: '500px',
                                borderRadius: '10%',
                                padding: '1px',
                                border: '2px solid #558b2f'
                            }}
                        />
                        <h4>+10 Points</h4>
                        <h5>{story.body}</h5>
                    </div>
                )
        }
    }
    render () {
        return (
            <div className="background-image-modal">
                <div className="modal-layout">
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default PathLanding
// -------------------------------------------------