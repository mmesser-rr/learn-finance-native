const getWyreTransactionById = (wyre) => (wyreTransactionId) => {
    return wyre.GetTransfer({transferId: wyreTransactionId}).then(res => res.data)
    .catch(err => Promise.reject(`Failed to reach wyre API. Error: ${err.message}`));
  };
  
  module.exports = {
    getWyreTransactionById
  }