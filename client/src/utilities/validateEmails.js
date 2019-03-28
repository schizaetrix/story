// -------------------------------------------------

const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// -------------------------------------------------
export default (emails) => {
    emails = emails.replace(/,\s*$/, '')
    const invalidEmails = emails
        .split(',')
        .map((email) => email.trim())
        .filter((email) => regex.test(email) === false && email !== '')
    if (invalidEmails.length) {
        return `${invalidEmails} is an invalid email`
    }
    return
}
// -------------------------------------------------