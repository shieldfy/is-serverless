'use strict'

var assert = require('assert')

//------- Vercel --------
process.env.VERCEL = '1'
var isServerless = require('../')
assert(isServerless.result)
assert.equal(isServerless.whichOne,'Vercel')