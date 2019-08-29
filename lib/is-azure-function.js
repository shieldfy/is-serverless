'use strict'

module.exports = !!(
    process.env.AzureWebJobsStorage ||
    false
)
