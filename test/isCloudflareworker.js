'use strict'

var assert = require('assert')

//------- Cloudflare --------
process.env.CLOUDFLARE_ZONE_ID = 'EU'
var isServerless = require('../')
assert(isServerless.result)
assert.equal(isServerless.whichOne,'Cloudflare')