const wyre = require("../wrappers/wyre");
const tpc = require("../wrappers/tpc");

const getWyreTransactionById = (wyreTransactionId) => {
  return wyre.getWyreTransactionById(wyreTransactionId)
    .catch(err => {
      throw new Error(`Failed to reach wyre. Reason: ${JSON.stringify(err)}`);
    });
}

module.exports = {
  getWyreTransactionById: getWyreTransactionById
}
