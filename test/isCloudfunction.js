'use strict'

var assert = require('assert')

//------- GCP --------
process.env.X_GOOGLE_FUNCTION_NAME = 'HelloWorld'
var isServerless = require('../')
assert(isServerless.result)
assert.equal(isServerless.whichOne,'GCP')