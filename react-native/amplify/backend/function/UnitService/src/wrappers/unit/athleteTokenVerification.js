const paramsFromCustId = () => ({
    type: "customerTokenVerification",
    attributes: {
      "channel": "sms"
  }
});


const athleteTokenVerification = (unit) => (custId) => {
    const params = paramsFromCustId();
    return unit.customerToken.createTokenVerification(custId, params)
    .then(res => res.data)
    .catch(err => Promise.reject(`Failed to reach Unit API. Error: ${JSON.stringify(err)}`));
  };
  
  module.exports = {
    athleteTokenVerification
  }
