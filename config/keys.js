// -------------------------------------------------
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod')                      // return prod set of keys
} else {
    module.exports = require('./dev')                       // return dev set of keys
}
// -------------------------------------------------