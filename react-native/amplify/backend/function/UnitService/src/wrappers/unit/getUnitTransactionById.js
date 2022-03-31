const getUnitTransactionById = (unit) => (unitAccountId, unitTransactionId) => {
    return unit.transactions.get(unitAccountId, unitTransactionId).then(res => res.data)
    .catch(err => Promise.reject(`Failed to reach Unit API. Error: ${err.message}`));
  };
  
  module.exports = {
    getUnitTransactionById
  }
  