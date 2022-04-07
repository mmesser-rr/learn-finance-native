const getAllUnitTransaction = (unit) => (custId) => {
    return unit.transactions.list({customerId: custId}).then(res => res.data)
    .catch(err => Promise.reject(`Failed to reach Unit API. Error: ${err.message}`));
  };
  
  module.exports = {
    getAllUnitTransaction
  }
  