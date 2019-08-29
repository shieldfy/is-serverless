'use strict'

var assert = require('assert')

//-------- No Serverless -----------
var isServerless = require('../')
assert(!isServerless.result)