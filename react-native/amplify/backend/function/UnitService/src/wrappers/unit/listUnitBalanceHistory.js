const listUnitBalanceHistory = (unit) => (custId) => {
    return unit.accountsEndOfDay.list({customerId: custId}).then(res => res.data)
    .catch(err => Promise.reject(`Failed to reach Unit API. Error: ${err.message}`));
  };
  
  module.exports = {
    listUnitBalanceHistory
  }
