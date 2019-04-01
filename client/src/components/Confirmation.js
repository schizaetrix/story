// -------------------------------------------------
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// -------------------------------------------------
import history from '../history'
import Modal from './Modal'
// -------------------------------------------------

class Confirmation extends Component {
    componentDidMount () {
        const confirmationModal = document.getElementById('confirmation')
        let options = {
            onCloseEnd: () => history.push('/storytree')
        }
        const instance = M.Modal.init(confirmationModal, options);
        instance.open()
    }
    renderContent () {
        return (
            <div>
                The story will begin when you, the players, receive the first 
                part of the story via email. Determine your path by choosing 
                your fate along the way, and watch your storytree grow!
            </div>
        )
    }
    renderActions () {
        return (
            <div>
                <Link 
                    to="/storytree"
                    className="
                        modal-close btn 
                        light-green darken-3 
                        black-text"
                >
                    Thanks!
                </Link>
            </div>
        )
    }
    render () {
        return (
            <div className="background-image-modal">
                <div className="modal-layout">
                    <div className="modal-trigger" href="#confirmation">
                        <form>
                            <Modal 
                                id="confirmation"
                                title="Check Your Email!"
                                content={this.renderContent()}
                                actions={this.renderActions()}
                                onDismiss={() => history.push('/storytree')}
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default Confirmation
// -------------------------------------------------