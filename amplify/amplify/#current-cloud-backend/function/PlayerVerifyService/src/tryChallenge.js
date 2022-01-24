const { getPhoneChallenge, verifyPhoneChallenge } = require("./api.js");

const isValid = (challenge) => challenge != null && !challenge.verified;

const verifyPhoneChallengeIfValid = (challenge) => {
  const valid = isValid(challenge);
  
  if (valid) {
    const {code, phoneNumber} = challenge;
    verifyPhoneChallenge(code, phoneNumber);
  }

  return valid;
}

module.exports = async (event) => {
  const {code, phoneNumber} = event.arguments;
  return getPhoneChallenge(code, phoneNumber)
  .then(challenge => verifyPhoneChallengeIfValid(challenge))
  .catch(error => {throw new Error(`Error encountered while verifying phone code: ${error}`)});
}
