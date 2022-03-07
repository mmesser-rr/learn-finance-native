const { persistAccount } = require("./persistAccount");
const { addUnitDataToAthlete } = require("./addUnitDataToAthlete");
const {updatePodSettings} = require("./updatePodSettings");
const { getAthlete } = require("./getAthlete");
const env = require("../../env.js");

module.exports = {
  persistAccount: persistAccount(env.axios),
  addUnitDataToAthlete: addUnitDataToAthlete(env.axios),
  updatePodSettings: updatePodSettings(env.axios),
  getAthlete: getAthlete(env.axios)
}
