const createApplication = require("./createApplication");
const createAccount = require("./createAccount");
const createCounterParty = require("./createCounterParty");
const getApplication = require("./getApplication");
const transfer = require("./transfer.js");

module.exports = {
  ...createApplication,
  ...createAccount,
  ...createCounterParty,
  ...transfer,
  ...getApplication
}
