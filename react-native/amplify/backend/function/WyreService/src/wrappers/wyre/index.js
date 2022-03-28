const { createAccount } = require("./createAccount");
const { debitAccount } = require("./debitAccount");
const { creditAccount } = require("./creditAccount");
const { getAthleteWyreAccount } = require("./getAthleteWyreAccount");
const {getAllWyreTransaction} = require("./getAllWyreTransaction");
const {getWyreTransactionById} = require("./getWyreTransactionById");
const {createAthleteWyreToken} = require("./createAthleteWyreToken");

const { wrye } = require("../../env.js");

module.exports = {
  createAccount: createAccount(wrye),
  createAthleteWyreToken: createAthleteWyreToken(wrye),
  debitAccount: debitAccount(wrye),
  creditAccount: creditAccount(wrye),
  getAthleteWyreAccount: getAthleteWyreAccount(wrye),
  getWyreTransactionById: getWyreTransactionById(wrye),
  getAllWyreTransaction: getAllWyreTransaction(wrye)
}
