const wyre = require("../wrappers/wyre");
const tpc = require("../wrappers/tpc");

const getAllWyreTransactions = (wyreAccountId) => {
  return wyre.getAllWyreTransaction(wyreAccountId)
    .catch(err => {
      throw new Error(`Failed to reach wyre. Reason: ${JSON.stringify(err)}`);
    });
}

const getAllWyreTransaction = (athleteId) => tpc.getAthlete(athleteId).then(athlete => 
    (athlete != null) ? 
    getAllWyreTransactions(athlete?.wyreAccountId) : 
      Promise.reject(`No athlete found with id ${athleteId}`)
  )
  

module.exports = {
  getAllWyreTransaction: getAllWyreTransaction
}