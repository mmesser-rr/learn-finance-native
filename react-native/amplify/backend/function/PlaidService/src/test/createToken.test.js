const assert = require('assert');
const sinon = require("sinon");
const tpc = require("../wrappers/tpc");
const plaid = require("../wrappers/plaid");


describe('createToken', () => {

    const athleteId = "20025434535";
    const athlete = {
        "id": athleteId,
        "firstName": "Richard",
        "lastName": "Hendricks",
        "dateOfBirth": "2001-08-10",
        "address": {
          "streetAddress": "20 Ingram St.",
          "apt": "3",
          "city": "Forest Hills",
          "state": "CA",
          "zipCode": "11375"
        },
        "unitLookup": {
          "appId": "228152",
          "custId": "191485"
        },
        "email": "april@baxter.com",
        "phone": "2025550158"
      }

      const LinkTokenCreateRequest = {
        "client_name": "TPC",
        "country_codes": ["US"],
        "language": "en",
        "user": {
          "client_user_id": athleteId
        },
        "products":["auth", "transactions"]
      }

    const plaidSuccessResponse = {
        expiration: "2022-03-25T14:37:53Z",
        link_token: "link-sandbox-435dbd3f-5eda-40cc-8d33-e14b3fa7be98",
        request_id: "s2ChtdvobXusrVt"
    };

    const plaidFailedResponse = {
        error_type: 'INVALID_REQUEST',
        error_code: 'MISSING_FIELDS',
        error_message: 'the following required fields are missing: user.client_user_id',
        display_message: null,
        documentation_url: 'https://plaid.com/docs/#create-link-token',
        request_id: '9lnknr0HBRTXNWz'
    };

    const athleteWithoutCustId = clone(athlete);
    athleteWithoutCustId.unitLookup = undefined;
  

    beforeEach(() => {
        getAthleteStub = sinon.stub(tpc, "getAthlete");
        createTokenStub = sinon.stub(plaid, "createToken");
      });
    
      afterEach(() => {
        getAthleteStub.restore();
        createTokenStub.restore();
    });

    describe("before doing any work", () => {
      it("should throw if athlete has not made a unit application or have account", () => {
        const athleteWithoutCustId = clone(athlete);
        athleteWithoutCustId.unitLookup.custId = undefined;
  
        getAthleteStub.resolves(athleteWithoutCustId);
  
        assert.rejects(createToken(athlete.id), "Athlete does not have a unit customer id. Has their unit application been approved?");
      });
    });

      describe("shold return error if plaid failed", () => {
      it("should return failed, if plaid call is not successful", async () => {
        getAthleteStub.resolves(athlete);
        plaidFailedResponse.returns(Promise.resolve(false));
        plaidFailedResponse.returns(Promise.reject());
        
        try {
          await createTokenStub(event);
        } catch {} finally {
          assert.rejects(createToken(athlete));
        }
      });
    });
    
  
    it("should return token for the athlete if plaid return successful", async () => {
        getAthleteStub.resolves(athlete);
        plaidSuccessResponse.returns(Promise.resolve(true));
        plaidSuccessResponse.returns(Promise.resolve());
        
        await createToken(event);
        assert.equal(persistChallengeStub.callCount, 1);
      });
});