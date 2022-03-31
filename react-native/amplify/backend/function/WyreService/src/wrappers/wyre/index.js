const { createAccount } = require("./createAccount");
const { debitAccount } = require("./debitAccount");
const { creditAccount } = require("./creditAccount");
const { getAthleteWyreAccount } = require("./getAthleteWyreAccount");
const {getAllWyreTransaction} = require("./getAllWyreTransaction");
const {getWyreTransactionById} = require("./getWyreTransactionById");
const {createAthleteWyreToken} = require("./createAthleteWyreToken");

const { wyre } = require("../../env.js");

module.exports = {
  createAccount: createAccount(wyre),
  createAthleteWyreToken: createAthleteWyreToken(wyre),
  debitAccount: debitAccount(wyre),
  creditAccount: creditAccount(wyre),
  getAthleteWyreAccount: getAthleteWyreAccount(wyre),
  getWyreTransactionById: getWyreTransactionById(wyre),
  getAllWyreTransaction: getAllWyreTransaction(wyre)
}
