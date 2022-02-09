const parsePhoneNumber = require('libphonenumber-js');

const errorPreamble = (phoneNumber, postamble) => `Cannot initiate challenge for phone number ${phoneNumber}. ${postamble}`;

const cleanPhoneNumber = (phoneNumber) => {
  const cleanNumber = parsePhoneNumber(phoneNumber, 'US');

  if (cleanNumber == undefined || !cleanNumber.isValid()) {
    throw new Error(errorPreamble(phoneNumber, "Phone number is not a valid US phone number."));
  } 

  return cleanNumber.number;
}

module.exports = {
  cleanPhoneNumber
}
