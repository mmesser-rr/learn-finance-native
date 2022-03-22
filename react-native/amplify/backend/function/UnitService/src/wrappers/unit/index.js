const { createApplication } = require("./createApplication");
const { createAccount } = require("./createAccount");
const { bookPayment } = require("./bookPayment");
const { debitAccount } = require("./debitAccount");
const { creditAccount } = require("./creditAccount");
const { plaidPayment } = require("./plaidPayment");
const { getAthleteUnitAccountById } = require("./getAthleteUnitAccountById");
const { getAllAthleteAccounts } = require("./getAllAthleteAccounts");
const {getAllUnitTransaction} = require("./getAllUnitTransaction");
const {getUnitTransactionById} = require("./getUnitTransactionById");
const {listUnitBalanceHistory} = require("./listUnitBalanceHistory");
const {createAtleteUnitToken} = require("./createAtleteUnitToken");
const {getAccountStatement} = require("./getAccountStatement");
const {athleteTokenVerification} = require("./athleteTokenVerification");

const { unit } = require("../../env.js");

module.exports = {
  createApplication: createApplication(unit),
  createAccount: createAccount(unit),
  createAtleteUnitToken: createAtleteUnitToken(unit),
  getAccountStatement: getAccountStatement(unit),
  athleteTokenVerification: athleteTokenVerification(unit),
  debitAccount: debitAccount(unit),
  getAllAthleteAccounts: getAllAthleteAccounts(unit),
  getAthleteUnitAccountById: getAthleteUnitAccountById(unit),
  creditAccount: creditAccount(unit),
  plaidPayment: plaidPayment(unit),
  listUnitBalanceHistory: listUnitBalanceHistory(unit),
  getUnitTransactionById: getUnitTransactionById(unit),
  getAllUnitTransaction: getAllUnitTransaction(unit),
  bookPayment: bookPayment(unit)
}
