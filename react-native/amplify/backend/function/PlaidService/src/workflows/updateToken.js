const plaid = require("../wrappers/plaid");
const tpc = require("../wrappers/tpc");

const tokenFromPlaidParams = (athleteId, plaidResponse) => (
  {
    athleteId,
    unitAccountId: plaidResponse.data.id,
    routingCode: plaidResponse.data.attributes.routingNumber,
    accountNumber: plaidResponse.data.attributes.accountNumber
  }
);
const persistAccountInBackend = (athleteId, plaidResponse) => tpc.persistAccount(tokenFromPlaidParams(athleteId, plaidResponse));

const updateToken = (athlete) => {
  const custId = athlete?.unitLookup?.custId;
  const athleteId = athlete.id;

  if (custId === undefined) {
    throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
  }

  return plaid.updateToken(custId, athleteId)
    .then(res => persistAccountInBackend(athleteId, res))
    .catch(err => {
      throw new Error(`Failed to create account in Unit. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
    updateToken: (athleteId) => tpc.getAthlete(athleteId).then(updateToken)
}
