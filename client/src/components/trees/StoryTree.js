// -------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import M from 'materialize-css'
// -------------------------------------------------
import Matrix from '../../assets/images/matrix.jpg'
import TreePlayerOne from './TreePlayerOne'
import TreePlayerTwo from './TreePlayerTwo'
import Donations from '../Donations'
// -------------------------------------------------

class StoryTree extends Component {
    componentDidMount () {
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems, {});
    }
    render () {
        return (
            <React.Fragment>
                <div 
                    className="
                        parallax-container 
                        center valign-wrapper"
                >
                    <TreePlayerOne />
                    <div className="parallax">
                        <img 
                            src={Matrix} 
                            alt="matrix"
                        />
                    </div>
                </div>
                <div 
                    className="
                        section light-green
                        darken-3 black-text"
                    style={{
                        height: '75px'
                    }}
                >
                    <div className="row container center-align">
                        <Donations 
                            credits={this.props.auth.credits}
                        />
                    </div>
                </div>
                <div 
                    className="
                        parallax-container 
                        center valign-wrapper"
                >
                    <TreePlayerTwo />
                    <div className="parallax">
                        <img 
                            src={Matrix} 
                            alt="matrix"
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

// -------------------------------------------------
function mapStateToProps ({ auth }) {
    return { auth }
}
// -------------------------------------------------
export default connect(
    mapStateToProps
)(StoryTree)
// -------------------------------------------------