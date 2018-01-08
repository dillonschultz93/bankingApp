//dependencies
const transactions = require('./dependencies/transactions.js')

//node arguments
const action = process.argv[3]
const amount = process.argv[4]

let doTransaction = transactions[action];
doTransaction(amount)