const getAthleteUnitAccountById = (unit) => (unitAccountId) => {
    return unit.accounts.get(unitAccountId).then(res => res.data)
    .catch(err => Promise.reject(`Failed to reach Unit API. Error: ${err.message}`));
  };
  
  module.exports = {
    getAthleteUnitAccountById
  }
  