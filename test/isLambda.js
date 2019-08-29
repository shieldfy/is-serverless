'use strict'

var assert = require('assert')

//------ AWS -----------
process.env.AWS_EXECUTION_ENV = 'AWS_Lambda_nodejs6.10'
process.env.LAMBDA_TASK_ROOT = '/var/task'

var isServerless = require('../')
assert(isServerless.isIt)
assert.equal(isServerless.whichOne,'AWS')