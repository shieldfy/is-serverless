# is-serverless

Detection library for serverless environment, currently supports ([AWS Lambda](https://aws.amazon.com/lambda/), [GCP cloud functions], [Azure functions], [Cloudflare workers])

## Inspiration

This package inspired by `is-lambda` package by [@watson](https://github.com/watson)

## Installation

```
npm install is-serverless
```

## Usage

```js
var isServerless = require('is-serverless')

if (isServerless.result) {
  console.log('The code is running on a serverless environment : ' + isServerless.whichOne)
}
```

## Contribution

Feel free to fork, commit and submit pull request if you find a bug, or you want to add support to a new environment. Contributions are very welcome.


## License

MIT