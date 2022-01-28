const AWS = require('aws-sdk');
const ses = new AWS.SES();

const api = require("./wrappers/emailChallengeGraphqlWrapper.js");

const genCode = require("./genCode.js");

const EmailChallenge = require("./models/EmailChallenge");

const paramsForEmail = (email, code) => ({
  Destination: {
    ToAddresses: [
      'jenna.murrell@kunaico.com',
    ]
  },
  Message: {
    Body: {
      Html: {
       Charset: "UTF-8",
       Data: code
      },
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Verify Your Email For The Players Company'
     }
    },
  Source: 'jenna.murrell@kunaico.com',
});

const sendEmail = (params) => ses.sendEmail(params).promise();

const sendEmailChallenge = async (email) => {
  const code = genCode();

  const challengeToPersist = {
    code: code,
    email: email,
    verified: false
  }

  const emailChallenge = await api.persistEmailChallenge(challengeToPersist);

  const params = paramsForEmail(email, code);

  return sendEmail(params);
}

const initiateEmailChallenge = async (event) => {
  const code = genCode();
  const { email } = event.arguments;

  const invalid = await api.emailHasChallenge(email);

  if (invalid) {
    //throw new Error("Email has already been challenged");
  }

  const challenge = EmailChallenge(code, email);

  return sendEmailChallenge(email).catch(err => {
    throw new Error("Error sending email");
  })
    .then(d => api.persistEmailChallenge(challenge)).catch(err => {
    throw new Error("Error when persisting email challenge");
  });
};

module.exports = {
  initiateEmailChallenge
}
