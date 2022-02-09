const api = require("../wrappers/phoneChallengeGraphqlWrapper.js");
const PhoneChallenge = require("../models/PhoneChallenge.js");
const sns = require("../wrappers/snsWrapper.js");

const genCode = require("../genCode.js");
const { cleanPhoneNumber } = require("./cleanPhoneNumber.js");

const errorPreamble = (phoneNumber, postamble) => `Cannot initiate challenge for phone number ${phoneNumber}. ${postamble}`;

initiatePhoneChallenge = async (event) => {
  const code = genCode();
  const phoneNumber = cleanPhoneNumber(event.arguments.phoneNumber);

  const invalid = await api.phoneNumberHasChallenge(phoneNumber);
  
  if (invalid) {
    throw new Error(errorPreamble(phoneNumber, "Phone number already has been challenged"));
  }

  const challenge = PhoneChallenge(code, phoneNumber);

  return sns.sendSMSChallenge(challenge)
    .catch(err => {
      throw new Error(errorPreamble(phoneNumber, `Error while attempting to send SMS: ${err}`));
    })
    .then(d => api.persistChallenge(challenge))
    .catch(err => {
      throw new Error(errorPreamble(phoneNumber, `Error while attempting to persist Challenge: ${err}`));
    });
}

module.exports = {
  initiatePhoneChallenge: initiatePhoneChallenge,
  cleanPhoneNumber: cleanPhoneNumber
}
