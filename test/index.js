/* global describe, it */

var assert = require('assert')
var deriveUTXO = require('../')
var fixtures = require('./fixtures')

describe('utxo', function () {
  fixtures.forEach(function (f) {
    it('Derives the result for ' + f.description, function () {
      var actual = deriveUTXO(f.transactions)

      assert.deepEqual(f.expected, actual)
    })
  })
})
