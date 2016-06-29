var test = require('tape')
var deriveUTXO = require('../')
var fixtures = require('./fixtures')

fixtures.forEach(function (f) {
  test('Derives the result for ' + f.description, function (t) {
    t.plan(1)

    t.deepEqual(f.expected, deriveUTXO(f.transactions))
  })
})
