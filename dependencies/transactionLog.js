const fileSystem = require('fs')

//append all transactions to the proper .txt file
const appendTransaction = function(input) {
  switch(accountName){
    case 'savings':
    fileSystem.appendFile('../transactions/savings.txt', ',' + input, function(error){
      return console.log(error)
    });
    break;
  }
}