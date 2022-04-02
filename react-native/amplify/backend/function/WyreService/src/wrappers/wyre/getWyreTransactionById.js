const getWyreTransactionById = (wyre) => (wyreTransactionId) => {
    return wyre.get(`/v3/transfers/${wyreTransactionId}`)
    .catch(err => Promise.reject(`Failed to reach wyre API. Error: ${err.message}`));
  };
  
  module.exports = {
    getWyreTransactionById
  }