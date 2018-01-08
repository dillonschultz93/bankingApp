const appendTransaction = require('../dependencies/transactionLog.js').appendTransaction;
const getTotal = require('../dependencies/transactionLog.js').getTotal;

const deposit = function(amount) {
  appendTransaction(amount)
}

const withdraw = function(amount) {
  appendTransaction('-' + amount)
} 

module.exports = {
  total: getTotal,
  deposit: deposit,
  withdraw: withdraw
};