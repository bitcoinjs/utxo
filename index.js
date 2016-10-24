module.exports = function deriveUTXO (transactions) {
  var txIns = {}
  var txOuts = {}
  var droppedTxIds = {}

  for (var txId in transactions) {
    var transaction = transactions[txId]

    // drop double spends, first-seen only
    if (
      transaction.inputs.some(function (input) {
        return txIns[input.txId + input.vout] || droppedTxIds[input.txId]
      })
    ) {
      droppedTxIds[txId] = true

      continue
    }

    transaction.inputs.forEach(function (input) {
      txIns[input.txId + input.vout] = true
    })

    transaction.outputs.forEach(function (output, vout) {
      txOuts[txId + vout] = Object.assign({
        txId: txId,
        vout: vout
      }, output)
    })
  }

  var UTXO = []

  for (var txOut in txOuts) {
    if (txIns[txOut]) continue

    UTXO.push(txOuts[txOut])
  }

  return UTXO
}
