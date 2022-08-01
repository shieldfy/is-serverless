'use strict'

module.exports = {
    'isAWSLambda' : require('./is-aws-lambda'),
    'isGCPCloudfunction' : require('./is-gcp-cloudfunction.js'),
    'isAzureFunction' : require('./is-azure-function.js'),
    'isCloudflareWorker' : require('./is-cloudflare-worker.js'),
    'isVercel' : require('./is-vercel.js')
}