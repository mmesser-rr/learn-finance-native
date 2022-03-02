const aws = require('aws-sdk');
const ses = new aws.SES();

const paramsForEmail = (email, code) => ({
  Destination: {
    ToAddresses: [
      email,
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
  Source: 'no-reply@tpc.com',
});

const sendEmailChallenge = (emailChallenge) =>  {
  const { email, code } = emailChallenge;
  const params = paramsForEmail(email, code);
  return ses.sendEmail(params).promise();
}

module.exports = {
  sendEmailChallenge
}
