const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const { podNaming } = require("./podNaming");
const { validateUser } = require("./validateUser");

const accountFromUnitParams = (athlete, unitResponse, podName) => (
  {
    athleteId: athlete.id,
    podName: podName,
    unitAccountId: unitResponse.data.id,
    routingCode: unitResponse.data.attributes.routingNumber,
    accountNumber: unitResponse.data.attributes.accountNumber
  }
);

const persistAccountInBackend = (athlete, unitResponse, podName) => tpc.persistAccount(accountFromUnitParams(athlete, unitResponse, podName));


const createAndPersistAccount = (athlete, podName) => {
  const custId = athlete?.unitLookup?.custId;
  const athleteId = athlete.id;
  
  if (custId === undefined) {
    throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
  }
  return unit.createAccount(custId, athleteId, podName)
    .then(res => persistAccountInBackend(athlete, res, podName))
    .catch(err => {
      throw new Error(`Failed to create account in Unit. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
  createAndPersistAccount: (event, athleteId, podName) => tpc.getAthlete(validateUser(event), athleteId).then(athlete => createAndPersistAccount(athlete, podName))
}