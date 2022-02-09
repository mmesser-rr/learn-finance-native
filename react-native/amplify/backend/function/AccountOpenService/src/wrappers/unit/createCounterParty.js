const R = require("ramda");
const { Reader } = require("monet");

const paramsForUnit = (
  custId,
  {
    name,
    routingNumber,
    accountNumber
  }
) => ({
  "type": "achCounterparty",
  "attributes": {
    "name": name,
    "routingNumber": routingNumber,
    "accountNumber": accountNumber,
    "accountType": "Checking",
    "type": "Person"
  },
  "relationships": {
    "customer": {
      "data": {
        "type": "customer",
        "id": custId
      }
    }
  }
});

const createCounterParty = (params) => Reader(unit => unit.counterparties.create(params));

module.exports = {
  createCounterParty: R.compose(createCounterParty, paramsForUnit)
}
