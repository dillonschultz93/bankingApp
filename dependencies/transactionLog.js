const fileSystem = require('fs')

//append all transactions to the proper .txt file
const appendTransaction = function(input) {
  const accountName = process.argv[2]
  
  switch(accountName){
    case 'savings':
      fileSystem.appendFile('dependencies/savings.txt', ',' + input, function(error){
        if (error) {
          return console.log(error)
        }
        console.log(`Transaction successful!`)
        getTotal()
      });
    break;
    case 'checking':
      fileSystem.appendFile('dependencies/checking.txt', ',' + input, function(error){
        if (error) {
          return console.log(error)
        }
        console.log('Transaction successful!')
        getTotal()
      });
    break;
  }
}
// get totals from the proper .txt file 
const getTotal = function() {
  const accountName = process.argv[2]
  
  switch(accountName) {
    case 'savings':
      fileSystem.readFile('dependencies/savings.txt', 'utf8', function(error, data){
        if (error) {
          return console.log(error)
        }
        const dataArray = data.trim().split(',')
        let sum = 0
        dataArray.forEach(function(element){
          sum += parseFloat(element)
        });
        console.log(`You have a total of $${sum.toFixed(2)} in your savings account.`)
      });
    break;
    case 'checking':
      fileSystem.readFile('dependencies/checking.txt', 'utf8', function(error, data){
        if (error) {
          return console.log(error)
        }
        const dataArray = data.trim().split(',')
        let sum = 0
        dataArray.forEach(function(element){
          sum += parseFloat(element)
        }); 
        console.log(`You have a total of $${sum.toFixed(2)} in your checking account.`)
      });
    break;
    default:
      console.log('Sorry, that command is invalid.')
  }
}
//exports
module.exports = {
  appendTransaction: appendTransaction,
  getTotal: getTotal,
};