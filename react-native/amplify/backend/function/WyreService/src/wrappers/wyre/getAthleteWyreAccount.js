const getAthleteWyreAccount = (wyre) => (wyreAccountId) => {
    return wyre.GetWallet({walletId: wyreAccountId}).then(res => res.data)
    .catch(err => Promise.reject(`Failed to reach wyre API. Error: ${err.message}`));
  };
  
  module.exports = {
    getAthleteWyreAccount
  }
  