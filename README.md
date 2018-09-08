# Wanchain WNS Network Map

[![CircleCI][circle-image]][circle-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![dependency status][dep-image]][dep-url]
[![NPM][npm-image]][npm-url]

A simple mapping of wanchain network IDs to Wanchain WNS addresses, when available.

The network IDs are stringified integers.

The addresses are hex-prefixed wanchain addresses.

## Usage

`npm install wanchain-wns-network-map --save`

```javascript
var wnsNetworkMap = require('wanchain-wns-network-map')

web3.version.getNetwork(function (err, networkId) {

  var wnsAddress = wnsNetworkMap[networkId]
  // Initialize your client from this!

})

```

[circle-image]: https://circleci.com/gh/WanJS/wanchain-wns-network-map.svg?style=svg
[circle-url]: https://circleci.com/gh/WanJS/wanchain-wns-network-map
[dep-image]: https://david-dm.org/WanJS/wanchain-wns-network-map.svg
[dep-url]: https://david-dm.org/WanJS/wanchain-wns-network-map
[coveralls-image]: https://coveralls.io/repos/github/WanJS/wanchain-wns-network-map/badge.svg?branch=dev
[coveralls-url]: https://coveralls.io/github/WanJS/wanchain-wns-network-map?branch=dev
[npm-image]: http://img.shields.io/npm/v/wanchain-wns-network-map.svg
[npm-url]: https://www.npmjs.org/package/wanchain-wns-network-map
