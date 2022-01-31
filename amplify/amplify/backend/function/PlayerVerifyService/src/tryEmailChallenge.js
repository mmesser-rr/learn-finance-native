const { getEmailChallenge, verifyEmailChallenge } = require("./wrappers/emailChallengeGraphqlWrapper.js");

const isValid = (challenge) => true;

const verifyEmailChallengeIfValid = (challenge) => {
  const valid = isValid(challenge);
  
  if (valid) {
    const {code, email} = challenge;
    verifyEmailChallenge(code, email);
  }

  return valid;
}

module.exports = async (event) => {
  const {code, email} = event.arguments;
  return getEmailChallenge(code, email)
  .then(challenge => {
    if (!challenge) throw new Error(`No existing challenge with code: ${code}, email: ${email}. Challenge code is wrong (most likely) or challenge hasn't been send to this email yet.`);
    })
  .then(challenge => verifyEmailChallengeIfValid(challenge))
}
