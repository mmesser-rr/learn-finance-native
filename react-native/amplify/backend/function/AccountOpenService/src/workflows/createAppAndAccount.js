const { createAndPersistAccount } = require("./createAccount");
const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const keysFromUnit = (res) => {
  const appId = res.data.id;
  const custId = res?.data?.relationships?.customer?.data?.id;

  return custId ? {
    appId,
    custId
  } : {
    appId
  }
};

createAccountIfApproved = (athleteId, res, keys) => {
  const appStatus = res.data.attributes.status;
  if  (appStatus === "Approved") {
    return createAndPersistAccount(athleteId);
  } else {
    return Promise.reject(`Application to Unit is ${appStatus}. Please contact support.`);
  }
}


const createAppAndAccount = (ssn, athlete) => {
  const custId = athlete?.unitLookup?.custId;

  /*if (custId !== undefined) {
    throw new Error("Looks like this athlete is already affiliated with a Unit customer. Continuing will overwrite and lose current unit data. Bailing");
  }*/

  return unit.createApplication(ssn, athlete).then(res => {
    const keys = keysFromUnit(res);
    
    return Promise.all([
      tpc.addUnitDataToAthlete(athlete.id, keys),
      createAccountIfApproved(athlete.id, res, keys)
    ]);
  });
}

const x = (ssn, athleteId) => tpc.getAthlete(athleteId).then(athlete => createAppAndAccount(ssn, athlete));

module.exports = {
  createAppAndAccount: x
}
