const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const accountFromUnitParams = (athleteId, unitResponse) => (
  {
    athleteId,
    routingCode: unitResponse.data.attributes.routingNumber,
    accountNumber: unitResponse.data.attributes.accountNumber
  }
);

const persistAccountInBackend = (athleteId, unitResponse) => tpc.persistAccount(accountFromUnitParams(athleteId, unitResponse));

const createAndPersistAccount = (athlete) => {
  const custId = athlete?.unitLookup?.custId;
  const athleteId = athlete.id;

  if (custId === undefined) {
    throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
  }

  return unit.createAccount(custId)
    .then(res => persistAccountInBackend(athleteId, res))
    .catch(err => {
      throw new Error(`Failed to create account in Unit. Reason: ${err}`);
    });
}

module.exports = {
  createAndPersistAccount: createAndPersistAccount
}
