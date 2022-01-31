const aws = require('aws-sdk');
const sns = new aws.SNS();

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

const sendEmailChallenge = (emailChallenge) =>  {
  const { email, code } = emailChallenge;
  const params = params(email, code);
  return ses.sendEmail(params).promise();
}

module.exports = {
  sendEmailChallenge
}
