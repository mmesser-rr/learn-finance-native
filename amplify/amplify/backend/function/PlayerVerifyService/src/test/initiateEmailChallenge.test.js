const assert = require('assert');
const fc = require('fast-check');
const sinon = require("sinon");
const api = require("../wrappers/emailChallengeGraphqlWrapper.js"); 
const sns = require("../wrappers/snsWrapper.js");

const { initiateEmailChallenge } = require('../initiateEmailChallenge.js');

describe('initiateEmailChallenge', () => {
  let emailHasChallengeStub;
  let persistChallengeStub;
  let sendEmailCHallengeStub;

  const phoneNumber = "4165557890";
  const event = {
    arguments: {
      phoneNumber: phoneNumber
    }
  }

  beforeEach(() => {
    emailHasChallengeStub = sinon.stub(api, "emailHasChallenge");
    persistChallengeStub = sinon.stub(api, "persistEmailChallenge");
    sendEmailChallengeStub = sinon.stub(sns, "sendEmailChallenge");
  });

  afterEach(() => {
    emailHasChallengeStub.restore();
    persistChallengeStub.restore();
    sendEmailChallengeStub.restore();
  });

  it("should not send an email if challenge already exists", async () => {
    emailHasChallengeStub.returns(Promise.resolve(true));
    
    try {
      await initiateEmailChallenge(event);
    } catch {} finally {
      assert.equal(sendEmailChallengeStub.callCount, 0);
    }
  });

  it("should not persist new challenge if challenge already exists", async () => {
    emailHasChallengeStub.returns(Promise.resolve(true));
    
    try {
      await initiateEmailChallenge(event);
    } catch {} finally {
      assert.equal(persistChallengeStub.callCount, 0);
    }
  });

  it("should send one email to phone if challenge does not already exist", async () => {
    emailHasChallengeStub.returns(Promise.resolve(false));
    sendEmailChallengeStub.returns(Promise.resolve());
    
    await initiateEmailChallenge(event);
    assert.equal(sendEmailChallengeStub.callCount, 1);
  });

  it("should not persist email challenge if email was not successful", async () => {
    emailHasChallengeStub.returns(Promise.resolve(false));
    sendEmailChallengeStub.returns(Promise.reject());
    
    try {
      await initiateEmailChallenge(event);
    } catch {} finally {
      assert.equal(persistChallengeStub.callCount, 0);
    }
  });

  it("should persist phoneChallenge if challenge does not already exist and SMS was successful", async () => {
    emailHasChallengeStub.returns(Promise.resolve(false));
    sendEmailChallengeStub.returns(Promise.resolve());
    
    await initiateEmailChallenge(event);
    assert.equal(persistChallengeStub.callCount, 1);
  });
});
