// -------------------------------------------------
import React from 'react'
// -------------------------------------------------

const EmailField = (
    { input, label, meta: { error, touched }, type }) => {
    return (
        <div>
            <label>{label}</label>
            <input 
                style={{ marginBottom: '5px' }}
                type={type}
                autoComplete="off"
                {...input}
            />
            <div
                className="red-text"
                style={{ marginBottom: '20px' }}
            >
                {touched && error}
            </div>
        </div>
    )
}

// -------------------------------------------------
export default EmailField
// -------------------------------------------------