'use strict'

module.exports = !!(
    process.env.CLOUDFLARE_ZONE_ID ||
    false
)
