const getAthleteAccountById = (unit) => (unitAccountId) => {
    return unit.accounts.get(unitAccountId);
  };
  
  module.exports = {
    getAthleteAccountById
  }
  