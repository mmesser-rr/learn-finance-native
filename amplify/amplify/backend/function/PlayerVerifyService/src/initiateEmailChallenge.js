const AWS = require('aws-sdk');
const ses = new AWS.SES();

const genCode = require("./genCode.js");

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

const sendEmailChallenge = (email) => {
  const code = genCode();
  const params = paramsForEmail(email, code);

  return sendEmail(params);
}

const initiateEmailChallenge = (event) => {
  const { email } = event.arguments;

  return sendEmailChallenge(email);
};

module.exports = {
  initiateEmailChallenge
}
