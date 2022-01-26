const assert = require('assert');
const fc = require('fast-check');

const { cleanPhoneNumber } = require('../initiateChallenge.js');

describe('cleanPhoneNumber', () => {
  it('should throw when passed an obviously invalid phone number', () => assert.throws(
    () => cleanPhoneNumber("123THX1472"), 
    Error, 
    "Cannot initiate challenge for phone number 123THX1472. Phone number is not a valid US phone number.")
  )

  it('should return the same phone number when given the same number but differently formatted', () => {
    const phoneNumbers = [cleanPhoneNumber("416-555-2368"), cleanPhoneNumber("1-416-555-2368"), cleanPhoneNumber("4165552368")];
    assert(
      phoneNumbers.every(n => n === phoneNumbers[0] )
    );
  });
});
