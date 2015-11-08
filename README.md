# utxo

[![TRAVIS](https://secure.travis-ci.org/dcousens/utxo.png)](http://travis-ci.org/dcousens/utxo)
[![NPM](http://img.shields.io/npm/v/utxo.svg)](https://www.npmjs.org/package/utxo)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)



## Example

``` javascript
let utxo = require('utxo')
let transactions = {
	"2c20ca6ca3a2af32d3ca0c6c1a60f6d3c00101342620a21f3622fc6faf2ddcda": {
		"inputs": [
			{
				"txId": "xxx ...",
				"vout": 0
			},
			{
				"txId": "xxx ...",
				"vout": 1
			}
		],
		"outputs": [
			{ "script": "..." }
		]
	},
	"bdcdd2fafa1c6c0ac3d23fa2a3ac66cf2263f12a03444310100c3d6c06ac02c3": {
		"inputs": [
			{
				"txId": "2c20ca6ca3a2af32d3ca0c6c1a60f6d3c00101342620a21f3622fc6faf2ddcda"
				"vout": 0
			},
			...
		],
		// and so on
	}
}

// equates all transaction outputs for where no matching input exists
// double spends are ignored in the returned result, with priority given to first-seen
let unspents = utxo(transactions)
// => [{ "script": "..." }, ...]

```

## LICENSE [MIT](LICENSE)
