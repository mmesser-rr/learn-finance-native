const paramsFromId = (accessToken, accountId) => ({
    access_token: accessToken,
    account_id: accountId,
    processor: "unit"
  });
  
  const processorToken = (plaid) => (accessToken, accountId) => {
    const params = paramsFromId(accessToken, accountId);
    return plaid.createProcessorToken(params);
  };
  
  module.exports = {
    processorToken
}