const getAthleteWyreAccount = (wyre) => (wyreAccountId) => {
    return wyre.get(`/v2/wallet/${wyreAccountId}`)
    .catch(err => Promise.reject(`Failed to reach wyre API. Error: ${err.message}`));
  };
  
  module.exports = {
    getAthleteWyreAccount
  }