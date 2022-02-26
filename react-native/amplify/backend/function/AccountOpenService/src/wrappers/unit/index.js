const { createApplication } = require("./createApplication");
const { createAccount } = require("./createAccount");
const { bookPayment } = require("./bookPayment");
const { debitAccount } = require("./debitAccount");
const { creditAccount } = require("./creditAccount");
const { getAthleteAccountById } = require("./getAthleteAccountById");
const { getAllAthleteAccounts } = require("./getAllAthleteAccounts");
const { unit } = require("../../env.js");

module.exports = {
  createApplication: createApplication(unit),
  createAccount: createAccount(unit),
  debitAccount: debitAccount(unit),
  getAllAthleteAccounts: getAllAthleteAccounts(unit),
  getAthleteAccountById: getAthleteAccountById(unit),
  creditAccount: creditAccount(unit),
  bookPayment: bookPayment(unit)
}
