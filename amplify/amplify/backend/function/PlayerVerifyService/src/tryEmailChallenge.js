const api = require("./wrappers/emailChallengeGraphqlWrapper.js");

const isValid = (challenge) => !!challenge;

const verifyEmailChallengeIfValid = (challenge) => {
  const valid = isValid(challenge);
  
  if (valid) {
    const {code, email} = challenge;
    api.verifyEmailChallenge(code, email);
  }

  return valid;
}

module.exports = async (event) => {
  const {code, email} = event.arguments;
  return api.getEmailChallenge(code, email)
  .then(challenge => verifyEmailChallengeIfValid(challenge))
}
