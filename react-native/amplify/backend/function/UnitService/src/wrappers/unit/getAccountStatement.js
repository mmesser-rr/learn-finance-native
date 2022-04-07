const getAccountStatement = (unit) => (custId) => {
    return unit.statements.list({customerId: custId}).then(res => res.data)
    .catch(err => Promise.reject(`Failed to reach Unit API. Error: ${err.message}`));
  };
  
  module.exports = {
    getAccountStatement
  }
