const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");
const { podNaming } = require("./podNaming");

let podName = "";

const accountFromUnitParams = (athlete, unitResponse) => (
  {
    athleteId: athlete.id,
    podName: podName,
    unitAccountId: unitResponse.data.id,
    routingCode: unitResponse.data.attributes.routingNumber,
    accountNumber: unitResponse.data.attributes.accountNumber
  }
);

const persistAccountInBackend = (athlete, unitResponse) => tpc.persistAccount(accountFromUnitParams(athlete, unitResponse));


const createAndPersistAccount = (athlete) => {
  const custId = athlete?.unitLookup?.custId;
  const athleteId = athlete.id;
  podName = podNaming(athlete);

  if (custId === undefined) {
    throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
  }
  //podName check here


  return unit.createAccount(custId, athleteId, podName)
    .then(res => persistAccountInBackend(athlete, res))
    .catch(err => {
      throw new Error(`Failed to create account in Unit. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
  createAndPersistAccount: (athleteId) => tpc.getAthlete(athleteId).then(createAndPersistAccount)
}
