// -------------------------------------------------
import React, { Component } from 'react'
import { Path } from 'path-parser'
// -------------------------------------------------
import Stories from '../../assets/storyDB'
// -------------------------------------------------

class WinLanding extends Component {
    constructor (props) {
        super(props)
        const path = new Path('/story/:chosen/win')
        const match = path.test(window.location.pathname)
        const storyValues = Object.values(Stories)
        this.state = {
            nodeMatch: match.chosen,
            storyAssets: storyValues[match.chosen - 1]
        }
    }
    render () {
        const story = this.state.storyAssets
        return (
            <div className="background-image-modal">
                <div className="modal-layout">
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
                    <h4>+20 Points</h4>
                    <h5>
                        {story.body}
                    </h5>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default WinLanding
// -------------------------------------------------