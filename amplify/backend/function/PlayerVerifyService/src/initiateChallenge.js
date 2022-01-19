const parsePhoneNumber = require('libphonenumber-js');

const aws = require('aws-sdk');
const sns = new aws.SNS();

const { persistChallenge, phoneNumberHasChallenge } = require("./api.js");
const PhoneChallenge = require("./models/PhoneChallenge.js");

const genCode = () => Math.random().toString(36).substr(2, 6);

const errorPreamble = (phoneNumber, postamble) => `Cannot initiate challenge for phone number ${phoneNumber}. ${postamble}`;

const sendSMSChallenge = (challenge) => {
  const params = {
    Message: challenge.code,
    PhoneNumber: challenge.phoneNumber
  };

  return sns.publish(params).promise();
};

const cleanPhoneNumber = (phoneNumber) => {
  const cleanNumber = parsePhoneNumber(phoneNumber, 'US');

  if (!cleanNumber.isValid()) {
    throw new Error(errorPreamble("Phone number is not a valid US phone number."));
  } 

  return cleanNumber.number;
}

module.exports = async (event) => {
  const code = genCode();
  const phoneNumber = cleanPhoneNumber(event.arguments.phoneNumber);

  const invalid = await phoneNumberHasChallenge(phoneNumber);
  
  if (invalid) {
    throw new Error(errorPreamble(phoneNumber, "Phone number already has been challenged"));
  }

  const challenge = PhoneChallenge(code, phoneNumber);

  return sendSMSChallenge(challenge)
    .catch(err => {
      throw new Error(errorPreamble(phoneNumber, `Error while attempting to send SMS: ${err}`));
    })
    .then(d => persistChallenge(challenge))
    .catch(err => {
      throw new Error(errorPreamble(phoneNumber, `Error while attempting to persist Challenge: ${err}`));
    });
}
