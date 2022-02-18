const { createApplication } = require("./createApplication");
const { createAccount } = require("./createAccount");

const { unit } = require("../../env.js");

module.exports = {
  createApplication: createApplication(unit),
  createAccount: createAccount(unit)
}
