const getAllWyreTransaction = (wyre) => (wryeAccountId) => {
    return wyre.get(`/v3/transfers/wallet:${wryeAccountId}?limit=50`)
    .catch(err => Promise.reject(`Failed to reach wyre API. Error: ${err.message}`));
  };
  
  module.exports = {
    getAllWyreTransaction
  }
  