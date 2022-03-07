const { getAthlete } = require("./getAthlete");
const { addPlaidToken } = require("./addPlaidToken");
const env = require("../../env.js");

module.exports = {
  getAthlete: getAthlete(env.axios),
  addPlaidToken: addPlaidToken(env.axios)
}
