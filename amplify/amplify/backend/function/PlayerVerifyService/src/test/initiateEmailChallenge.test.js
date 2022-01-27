const assert = require('assert');
const fc = require('fast-check');
const sinon = require("sinon");
const api = require("../wrappers/graphqlWrapper.js"); 
const sns = require("../wrappers/snsWrapper.js");

const { initiateEmailChallenge } = require('../initiateEmailChallenge.js');

describe('initiateEmailChallenge', () => {
  const event = {
    
  };
  it('should do something', () => initiateEmailChallenge(event))
});
