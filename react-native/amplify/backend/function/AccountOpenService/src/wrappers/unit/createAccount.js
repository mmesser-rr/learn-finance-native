const R = require("ramda");
const { Reader } = require("monet");

const paramsFromCustId = (custId) => ({
  type: "depositAccount",
  attributes: {
    "depositProduct": "checking",
    "tags": {
      "purpose": "checking"
    }
  },
  relationships: {
    "customer": {
      "data": {
        "type": "customer",
        "id": custId
      }
    }
  }
});

const createAccount = (params) => Reader(unit => unit.accounts.create(params));

module.exports = {
  createAccount: R.compose(createAccount, paramsFromCustId)
}
