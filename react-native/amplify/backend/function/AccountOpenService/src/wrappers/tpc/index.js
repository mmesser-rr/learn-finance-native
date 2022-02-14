const { persistAccount } = require("./persistAccount");
const { addUnitDataToAthlete } = require("./addUnitDataToAthlete");
const env = require("../../env.js");

module.exports = {
  persistAccount: persistAccount(env.axios),
  addUnitDataToAthlete: addUnitDataToAthlete(env.axios)
}
