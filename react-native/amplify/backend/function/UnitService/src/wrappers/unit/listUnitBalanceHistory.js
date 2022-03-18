const listUnitBalanceHistory = (unit) => (custId) => {
    return unit.accountsEndOfDay.list({customerId: custId}).then(res => res.data)
  };
  
  module.exports = {
    listUnitBalanceHistory
  }
