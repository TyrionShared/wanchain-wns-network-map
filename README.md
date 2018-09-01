# Wanchain WNS Network Map

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
