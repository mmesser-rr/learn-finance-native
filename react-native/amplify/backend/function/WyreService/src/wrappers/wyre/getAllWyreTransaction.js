const getAllWyreTransaction = (wyre) => (wryeAccountId) => {
    return wyre.ListTransfersPaginated({walletId: wryeAccountId, offset: '0', limit: '100'}).then(res => res.data)
    .catch(err => Promise.reject(`Failed to reach wyre API. Error: ${err.message}`));
  };
  
  module.exports = {
    getAllWyreTransaction
  }
  