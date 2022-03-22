const getUnitTransactionById = (unit) => (unitTransactionId) => {
    return unit.transactions.get(unitTransactionId).then(res => res.data)
    .catch(err => Promise.reject(`Failed to reach Unit API. Error: ${err.message}`));
  };
  
  module.exports = {
    getUnitTransactionById
  }
  