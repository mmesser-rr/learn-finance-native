const R = require("ramda");
const { Reader } = require("monet");

const paramsForUnit = (
  custId,
  counterPartyId,
  {
    amount,
    direction,
    description
  }
) => ({
  "type": "achPayment",
  attributes: {
    amount,
    direction,
    description
  },
  relationships: {
    account: {
      data: {
        type: "depositAccount",
        id: custId
      }
    },
    counterparty: {
      data: {
        type: "counterparty",
        id: counterPartyId
      }
    }
  }
});

const transfer = (params) => Reader(unit => unit.payments.create(params));

module.exports = {
  transfer: R.compose(transfer, paramsForUnit)
}
