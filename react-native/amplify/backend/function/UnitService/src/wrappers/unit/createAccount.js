const paramsFromCustId = (custId, athleteId, podName) => ({
  type: "depositAccount",
  attributes: {
    "depositProduct": "checking",
    "tags": {
      "purpose": "checking",
      "athleteId": athleteId,
      "podName": podName
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

const createAccount = (unit) => (custId, athleteId, podName) => {
  const params = paramsFromCustId(custId, athleteId, podName);
  return unit.accounts.create(params)
  .catch(err => Promise.reject(`Failed to reach Unit API. Error: ${err.message}`));
};

module.exports = {
  createAccount
}
