const getAllAthleteAccounts = (unit) => (custId) => {
    return unit.accounts.get(custId);
  };
  
  module.exports = {
    getAllAthleteAccounts
  }
  