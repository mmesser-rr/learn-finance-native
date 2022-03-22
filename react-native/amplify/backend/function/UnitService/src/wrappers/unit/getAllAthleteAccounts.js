const getAllAthleteAccounts = (unit) => (custId) => {
    return unit.accounts.list({customerId: custId}).then(res => res.data)
    .catch(err => Promise.reject(`Failed to reach Unit API. Error: ${err.message}`));
  };
  
  module.exports = {
    getAllAthleteAccounts
  }
