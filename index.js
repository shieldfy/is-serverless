'use strict'

var serverlessFn = require('./lib')

var isServerless = function()
{
    return  ( serverlessFn.isAWSLambda && 'AWS' ) || 
                ( serverlessFn.isGCPCloudfunction && 'GCP' ) ||
                    ( serverlessFn.isAzureFunction && 'Azure' ) ||
                        ( serverlessFn.isCloudflareWorker && 'Cloudflare' ) ||
                            ( serverlessFn.isVercel && 'Vercel' )
            
}

var result = isServerless();

module.exports.result = result ? true : false;

module.exports.whichOne = result;
