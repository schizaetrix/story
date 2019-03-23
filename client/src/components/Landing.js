// -------------------------------------------------
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import M from 'materialize-css'
// -------------------------------------------------
import Matrix from '../assets/images/matrix.jpg'
// -------------------------------------------------

class Landing extends Component {
    componentDidMount () {
        var elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems, {});
    }
    render () {
        return (
            <React.Fragment>
                <div 
                    className="
                        parallax-container landing
                        center valign-wrapper"
                >
                    <div className="parallax">
                        <img 
                            src={Matrix} 
                            alt="matrix"
                        />
                    </div>
                </div>
                <div 
                    style={{ 
                        textAlign: "center",
                        paddingBottom: '50px',
                        color: '#558b2f'
                    }}>
                    <Link to={this.props.auth ? '/storytree' : '/'}>
                        <h1>
                            storyTree
                        </h1>
                    </Link>
                    Play a Choose Your Own Adventure game with a friend!
                </div>
                <div 
                    className="
                        parallax-container landing
                        center valign-wrapper"
                >
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
)(Landing)
// -------------------------------------------------