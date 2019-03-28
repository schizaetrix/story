// -------------------------------------------------
import React from 'react'
import ReactDOM from 'react-dom'
// -------------------------------------------------

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div
            onClick={props.onDismiss}
            className="modal"
            id={props.id}
        >
            <div 
                className="modal-content"
                onClick={(e) => e.stopPropagation()}        // Note: this keeps the onDismiss from the parent div from affecting the child divs
            >
                <h5>{props.title}</h5>
                {props.content}
            </div>
            <div 
                className="modal-footer"
                style={{ 
                    paddingRight: '15px',
                    paddingBottom: '15px'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {props.actions}
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

// -------------------------------------------------
export default Modal
// -------------------------------------------------