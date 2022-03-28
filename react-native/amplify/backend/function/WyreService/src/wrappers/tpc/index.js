const { getAthlete } = require("./getAthlete");
const {updateAthlete} = require("./updateAthleteAccount");
const {updateTransaction} = require("./updateTransaction");
const {createProcessorToken} = require("./createProcessorToken")
const {persistTransaction} = require("./persistTransaction");
const {updateWyreAccoundId} = require("./updateWyreAccoundId");
const env = require("../../env.js");

module.exports = {
  createProcessorToken : createProcessorToken(env.plaid),
  updateAthleteAccount: updateAthlete(env.axios),
  updateTransaction: updateTransaction(env.axios),
  persistTransaction: persistTransaction(env.axios),
  updateWyreAccoundId: updateWyreAccoundId(env.axios),
  getAthlete: getAthlete(env.axios)
}
