const { createApplication } = require("./createApplication");
const { createAccount } = require("./createAccount");
const getApplication = require("./getApplication");
const transfer = require("./transfer.js");

const env = require("../../env.js");

module.exports = {
  createApplication: createApplication(env.unit),
  createAccount: createAccount(env.unit),
  ...transfer,
  ...getApplication
}
