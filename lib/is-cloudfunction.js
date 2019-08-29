'use strict'

module.exports = !!(
    process.env.X_GOOGLE_FUNCTION_NAME ||
    false
)