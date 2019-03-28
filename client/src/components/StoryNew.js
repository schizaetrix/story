// -------------------------------------------------
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// -------------------------------------------------
import history from '../history'
import validateEmails from '../utilities/validateEmails'
import { storyStart } from '../actions'
import Modal from './Modal'
import EmailField from './EmailField'
// -------------------------------------------------

class StoryNew extends Component {
    componentDidMount () {
        const storyNewModal = document.getElementById('story-new')
        let options = {
            onCloseEnd: () => history.push('/storytree')
        }
        const instance = M.Modal.init(storyNewModal, options);
        instance.open()
    }
    renderContent () {
        return (
            <Field
                type="email"
                name="opponent"
                label="Enter your oppenent's email"
                component={EmailField}
            />
        )
    }
    renderActions () {
        const email = this.props.formValues
        return (
            <div>
                <Link 
                    to="/storytree" 
                    className="
                        modal-close btn 
                        light-green darken-3
                        black-text"
                    style={{ marginRight: '15px' }}
                >
                    Cancel
                </Link>
                <Link 
                    to="/storytree"
                    onClick={() => this.props.handleSubmit(
                        this.props.storyStart(email)
                    )}
                    className="
                        modal-close btn 
                        light-green darken-3 
                        black-text"
                >
                    Submit
                </Link>
            </div>
        )
    }
    render () {
        return (
            <div className="background-image-modal">
                <div className="modal-layout">
                    <div className="modal-trigger" href="#story-new">
                        <form>
                            <Modal 
                                id="story-new"
                                title="Let the Game Begin!"
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
function validate (values) {
    const errors = {}
    errors.opponent = validateEmails(values.opponent || '')
    if (!values.opponent) {
        errors.opponent = 'You must enter an email'
    }
    return errors
}
// -------------------------------------------------
const formWrapped = reduxForm({
    validate,
    form: 'storyForm'
})(StoryNew)
// -------------------------------------------------
function mapStateToProps (state) {
    return {
        formValues: state.form.storyForm
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { storyStart }
)(formWrapped)
// -------------------------------------------------