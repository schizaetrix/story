// -------------------------------------------------
import React, { Component } from 'react'
import { Path } from 'path-parser'
// -------------------------------------------------
import Stories from '../../assets/storyDB'
// -------------------------------------------------

class DeathLanding extends Component {
    constructor (props) {
        super(props)
        const path = new Path('/story/:chosen/death')
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
                    <h4>-5 Points, -1 Life</h4>
                    <h6>{story.lead}</h6>
                    <p className="light-green-text text-darken-3">
                        You have died! Go back to a previous email path and try again! Be more careful next time. :P
                    </p>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default DeathLanding
// -------------------------------------------------