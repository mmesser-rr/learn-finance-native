const { updateToken } = require("./updateToken");
const { plaid } = require("../../env.js");

module.exports = {
    updateToken: updateToken(unit),
}
