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

const createAccount = (unit) => (custId) => {
  const params = paramsFromCustId(custId);
  return unit.accounts.create(params);
};

module.exports = {
  createAccount
}