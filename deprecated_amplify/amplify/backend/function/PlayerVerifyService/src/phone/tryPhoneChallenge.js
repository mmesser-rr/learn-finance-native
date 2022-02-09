const api = require("../wrappers/phoneChallengeGraphqlWrapper.js");

const { cleanPhoneNumber } = require("./cleanPhoneNumber.js");

const isValid = (challenge) => !!challenge && !challenge.verified;

const verifyPhoneChallengeIfValid = (challenge) => {
  const valid = isValid(challenge);
  
  if (valid) {
    const {code, phoneNumber} = challenge;
    api.verifyPhoneChallenge(code, phoneNumber);
  }

  return valid;
}

module.exports = async (event) => {
  const { code } = event.arguments;
  const phoneNumber = cleanPhoneNumber(event.arguments.phoneNumber);

  return api.getPhoneChallenge(code, phoneNumber)
  .then(challenge => verifyPhoneChallengeIfValid(challenge))
  .catch(error => {throw new Error(`Error encountered while verifying phone code: ${error}`)});
}
