const paramsFromCustId = (verificationCode, token) => ({
  type: "customerToken",
  attributes: {
    "scope": "customers accounts payments payments-create counterparties counterparties-create",
    "verificationToken": token,
    "verificationCode": verificationCode
  }
});

const createAthleteUnitToken = (unit) => (custId, verificationCode, token) => {
    const params = paramsFromCustId(verificationCode, token);
    return unit.customerToken.createToken(custId, params).then(resultLens)
    .catch(err => Promise.reject(`Failed to reach Unit API. Error: ${err.message}`));
  };


  const resultLens = (res) => ({
    type: res.data.type,
    expiresIn: res.data.attributes.expiresIn
  });
  
  module.exports = {
    resultLens,
    createAthleteUnitToken
  }
