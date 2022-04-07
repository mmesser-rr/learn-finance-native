const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const getUnitTransactionById = (unitAccountId, unitTransactionId) => {
  const accounts = athlete.accounts.items;

  if (accounts.length !== 0 && !accounts.some(i => i.unitAccountId.includes(unitAccountId))) {
    throw new Error("Athlete does not doesn't match?");
  }

  return unit.getUnitTransactionById(unitAccountId, unitTransactionId)
    .catch(err => {
      throw new Error(`Failed to reach Unit. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
    getUnitTransactionById: (unitAccountId, unitTransactionId) => getUnitTransactionById(unitAccountId, unitTransactionId)
}
