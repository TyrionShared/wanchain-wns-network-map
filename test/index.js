const test = require('tape')
const wnsNetworkMap = require('../')

// Test results specified in original WNS Proposal:
// https://github.com/ethereum/EIPs/issues/137

test('mainnet', (t) => {
  t.plan(1)
  const input = ''
  const expected = '0xee8d418fd33e69782015ea4313dfd8eb7b1b91ce'
  const output = wnsNetworkMap[1]
  t.equal(output, expected)
})

test('testnet', (t) => {
  t.plan(1)
  const expected = '0xe85cfdf43a0db4aa0ec054a57451af7c73d4625b'
  const output = wnsNetworkMap[3]
  t.equal(output, expected)
})

