'use strict'

var serverlessFn = require('./lib')

var isServerless = function()
{
    return ( serverlessFn.isLambda && 'AWS' ) || ( serverlessFn.isCloudfunction && 'GCP' )
}

var result = isServerless();

module.exports.result = result ? true : false;

module.exports.whichOne = result;
