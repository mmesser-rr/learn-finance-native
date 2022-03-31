const unit = require("../wrappers/unit");
const tpc = require("../wrappers/tpc");

const getUnitTransactionById = (unitAccountId, unitTransactionId) => {
  return unit.getUnitTransactionById(unitAccountId, unitTransactionId)
    .catch(err => {
      throw new Error(`Failed to reach Unit. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
    getUnitTransactionById: getUnitTransactionById
}
