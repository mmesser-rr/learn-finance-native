const { persistAccount } = require("./persistAccount");
const { addUnitDataToAthlete } = require("./addUnitDataToAthlete");
const {updatePodSettings} = require("./updatePodSettings");
const { getAthlete } = require("./getAthlete");
const {updateAthlete} = require("./updateAthleteAccount");
const {updateTransaction} = require("./updateTransaction");
const {createProcessorToken} = require("./createProcessorToken")
const {persistTransaction} = require("./persistTransaction");
const {updateAthleteUnitToken} = require("./updateAthleteUnitToken");
const env = require("../../env.js");
//const axios = env.axios;
//axios.defaults.headers["Authorization"] = auth;


module.exports = {
  persistAccount: persistAccount(env.axios),
  addUnitDataToAthlete: addUnitDataToAthlete(env.axios),
  updatePodSettings: updatePodSettings(env.axios),
  createProcessorToken : createProcessorToken(env.plaid),
  updateAthleteAccount: updateAthlete(env.axios),
  updateTransaction: updateTransaction(env.axios),
  persistTransaction: persistTransaction(env.axios),
  updateAthleteUnitToken: updateAthleteUnitToken(env.axios),
  getAthlete: getAthlete(env.axios)
  
}