const paramsFromId = (athleteId) => ({
    client_name: "TPC",
    country_codes: ["US"],
    language: "en",
    user:{
        client_user_id: athleteId
    },
    products: ["auth", "transactions", "transfer"]
  });
  
  const createToken = (plaid) => (athleteId) => {
    const params = paramsFromId(athleteId);
    return plaid.linkTokenCreate({params}).then(data => {data.link_token})
  };
  
  module.exports = {
    createToken
  }
  