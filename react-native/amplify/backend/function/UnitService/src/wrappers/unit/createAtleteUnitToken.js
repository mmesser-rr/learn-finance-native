const paramsFromCustId = (verificationCode, token) => ({
  type: "customerToken",
  attributes: {
    "scope": "customers accounts payments payments-create counterparties counterparties-create",
    "verificationToken": token,
    "verificationCode": verificationCode
  }
});

const createAtleteUnitToken = (unit) => (custId, verificationCode, token) => {
    const params = paramsFromCustId(verificationCode, token);
    return unit.customerToken.createToken(custId, params).then(res => res.data)
    .catch(err => Promise.reject(`Failed to reach Unit API. Error: ${err.message}`));
  };
  
  module.exports = {
    createAtleteUnitToken
  }
