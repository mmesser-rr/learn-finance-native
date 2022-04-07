const {getUnitTransactionById} = require("./getUnitTransactionById");
const {getWyreTransactionById} = require("./getWyreTransactionById");
const {updateTransaction} = require("./updateTransaction");
const { unit, wyre, axios } = require("../env.js");

module.exports = {
  getUnitTransactionById: getUnitTransactionById(unit),
  getWyreTransactionById: getWyreTransactionById(wyre),
  updateTransaction: updateTransaction(axios),

}
