// const paramsFromId = (accessToken, athleteId) => ({
//   client_id: plaid,
//   secret: plaid,
//   public_token: accessToken
// });

const updateToken = (plaid) => (accessToken) => {
  return plaid.itemPublicTokenExchange({accessToken}).then(data => {data.access_token})
};

module.exports = {
  updateToken
}
