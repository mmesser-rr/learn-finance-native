const ses = require("./wrappers/sesWrapper.js");

const api = require("./wrappers/emailChallengeGraphqlWrapper.js");

const genCode = require("./genCode.js");

const EmailChallenge = require("./models/EmailChallenge");

const initiateEmailChallenge = async (event) => {
  const code = genCode();
  const { email } = event.arguments;

  const invalid = await api.emailHasChallenge(email);

  if (invalid) {
    throw new Error("Email has already been challenged");
  }

  const challenge = EmailChallenge(code, email);

  return ses.sendEmailChallenge(email).catch(err => {
    throw new Error("Error sending email");
  })
    .then(d => api.persistEmailChallenge(challenge)).catch(err => {
    throw new Error("Error when persisting email challenge");
  });
};

module.exports = {
  initiateEmailChallenge
}
