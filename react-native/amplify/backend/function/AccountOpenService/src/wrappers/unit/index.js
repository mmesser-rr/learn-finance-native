const { createApplication } = require("./createApplication");
const { createAccount } = require("./createAccount");

const env = require("../../env.js");

module.exports = {
  createApplication: createApplication(env.unit),
  createAccount: createAccount(env.unit),
}
