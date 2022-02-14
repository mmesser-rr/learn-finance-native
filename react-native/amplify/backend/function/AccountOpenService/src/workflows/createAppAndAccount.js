const { createAndPersistAccount } = require("./createAccount");
const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const athleteWithUnitData = (athlete, unitLookup) => ({
  ...athlete,
  unitLookup
});

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

const createAppAndAccount = (ssn, athlete) => {
  const custId = athlete?.unitLookup?.custId;

  if (custId !== undefined) {
    throw new Error("Looks like this athlete is already affiliated with a Unit customer. Continuing will overwrite and lose current unit data. Bailing");
  }

  return unit.createApplication(ssn, athlete).then(unitRes => {
    const keys = keysFromUnit(unitRes)
    return tpc.addUnitDataToAthlete(athlete.id, keys).then(tpcRes => {
      const appStatus = unitRes.data.attributes.status;
      if  (appStatus === "Approved") {
        return createAndPersistAccount(athleteWithUnitData(athlete, keys));
      } else {
        return Promise.reject(`Application to Unit is ${appStatus}. Please contact support.`);
      }
    });
  });
}

module.exports = {
  createAppAndAccount
}
