'use strict'

var assert = require('assert')

//------- Azure --------
process.env.AzureWebJobsStorage = 'Value'
var isServerless = require('../')
assert(isServerless.result)
assert.equal(isServerless.whichOne,'Azure')