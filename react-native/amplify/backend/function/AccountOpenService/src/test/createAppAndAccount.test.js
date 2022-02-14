const assert = require('assert');
const sinon = require("sinon");
const { clone } = require("ramda");

const { createAppAndAccount } = require("../workflows/createAppAndAccount");
const tpc = require("../wrappers/tpc");
const unit = require("../wrappers/unit");

describe('createAppAndAccount', () => {
  const ssn = "000000005";

  const athlete = {
    "id": "20025",
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

  const athleteWithoutCustId = clone(athlete);
  athleteWithoutCustId.unitLookup = undefined;

  const unitCustAndAppId = {
    custId: '199630',
    appId: '2005'
  }

  const unitAppId = {
    appId: '2005'
  }

  const unitApplicationApprovedResponse = {
    data: {
      id: "2005",
      attributes: { 
        status: 'Approved',
      },
      relationships: {
        org: { data: { type: 'org', id: '882' } },
        customer: { data: { type: 'individualCustomer', id: '199630' } }
      }
    }
  }

  const unitApplicationPendingResponse = {
    data: {
      id: "2005",
      attributes: { 
        status: 'Pending',
      },
      relationships: {
        org: { data: { type: 'org', id: '882' } }
      }
    }
  }

  const unitAccountResponse = {
    data: {
      attributes: {
        accountNumber: "1000271603",
        routingNumber: "20025"
      }
    }
  };

  const arbitrary = {};

  let persistAccountStub;

  beforeEach(() => {
    createApplicationStub = sinon.stub(unit, "createApplication");
    updateUnitDataStub = sinon.stub(tpc, "addUnitDataToAthlete");
    persistAccountStub = sinon.stub(tpc, "persistAccount");
    createAccountStub = sinon.stub(unit, "createAccount");
  });

  afterEach(() => {
    persistAccountStub.restore();
    createApplicationStub.restore();
    updateUnitDataStub.restore();
    createAccountStub.restore();
  });

  describe("before doing any work", () => {
    it("should throw if athlete has made a unit application already", () => {
      const athleteWithCustId = clone(athlete);
      athleteWithCustId.unitResponse = { custId: "5005" };

      const createAppAndAccountWithCustId = () => createAppAndAccount(athleteWithoutCustId);
      
      assert.throws(createAppAndAccountWithCustId, Error, "Looks like this athlete is already affiliated with a Unit customer. Continuing will overwrite and lose current unit data. Bailing");
    });
  });

  describe("when creating an application in Unit API", async () => {
    it("should create an application in Unit API if no appId found", async () => {
      createApplicationStub.resolves(unitApplicationApprovedResponse);
      updateUnitDataStub.resolves(arbitrary);
      createAccountStub.resolves(unitAccountResponse);
      persistAccountStub.resolves(arbitrary);

      const athleteWithoutCustId = clone(athlete);
      athleteWithoutCustId.unitLookup = undefined;

      await createAppAndAccount(ssn, athleteWithoutCustId);

      sinon.assert.calledOnce(createApplicationStub);
    });

    it("should not create an application in Unit API if athlete already has an Unit customer affiliated with it", async () => {
      createApplicationStub.resolves(unitApplicationApprovedResponse);
      updateUnitDataStub.resolves(arbitrary);
      createAccountStub.resolves(unitAccountResponse);
      persistAccountStub.resolves(arbitrary);

      const athleteWithCustId = clone(athlete);
      athleteWithCustId.unitResponse = { custId: "5005" };

      try {
        await createAppAndAccount(ssn, athleteWithCustId);
      } catch {} // Will throw but this is expected

      sinon.assert.notCalled(createApplicationStub);
    });
  });

  describe("when persisting a Unit application and customer id in TPC backend", async () => {
    it("should persist application id and customer id from Unit in TPC backend when Unit application is approved", async () => {
      createApplicationStub.resolves(unitApplicationApprovedResponse);
      updateUnitDataStub.resolves(arbitrary);
      createAccountStub.resolves(unitAccountResponse);

      await createAppAndAccount(ssn, athleteWithoutCustId);
      
      sinon.assert.calledWith(updateUnitDataStub, athlete.id, unitCustAndAppId);
    });

    it("should persist just application id from Unit in TPC backend when the Unit application is not approved and there is no customer id to persist", async () => {
      createApplicationStub.resolves(unitApplicationPendingResponse);
      updateUnitDataStub.resolves(arbitrary);
      createAccountStub.resolves(unitAccountResponse);

      try {
        await createAppAndAccount(ssn, athleteWithoutCustId);
      } catch {} // Exception expected but not relevant
      
      sinon.assert.calledWith(updateUnitDataStub, athlete.id, unitAppId);
    });
  });

  describe("when creating the athlete account in the Unit API", async () => {
    it("should open an account in Unit if application is approved", async () => {
      createApplicationStub.resolves(unitApplicationApprovedResponse);
      updateUnitDataStub.resolves(arbitrary);
      createAccountStub.resolves(unitAccountResponse);
      persistAccountStub.resolves(arbitrary);

      await createAppAndAccount(ssn, athleteWithoutCustId);

      sinon.assert.calledOnce(createAccountStub);
    })

    it("should not open an account in Unit if application is not approved", async () => {
      createApplicationStub.resolves(unitApplicationPendingResponse);
      updateUnitDataStub.resolves(arbitrary);
      createAccountStub.resolves(unitAccountResponse);

      try { 
        await createAppAndAccount(ssn, athleteWithoutCustId);
      } catch {} // Exception expected but not relevant

      sinon.assert.notCalled(createAccountStub);
    })

    it("should reject if account not successfully created in Unit API", () => {
      createApplicationStub.resolves(unitApplicationApprovedResponse);
      updateUnitDataStub.resolves(arbitrary);
      createAccountStub.rejects("error");

      assert.rejects(createAppAndAccount(ssn, athleteWithoutCustId));
    });
  });

  describe("when persisting the athlete account in TPC", async () => {
    it("should not persist athlete account if attempt to create account in Unit fails", async () => {
      createApplicationStub.resolves(unitApplicationApprovedResponse);
      updateUnitDataStub.resolves(arbitrary);
      createAccountStub.rejects(arbitrary);
      persistAccountStub.resolves(arbitrary);

      try {
        await createAppAndAccount(athlete);
      } catch {} finally {
        sinon.assert.notCalled(persistAccountStub);
      }
    });

    it("should persist unit deposit account details in TPC", async () => {
      createApplicationStub.resolves(unitApplicationApprovedResponse);
      updateUnitDataStub.resolves(arbitrary);
      createAccountStub.resolves(unitAccountResponse);
      persistAccountStub.resolves(arbitrary);

      await createAppAndAccount(ssn, athleteWithoutCustId);

      const athleteId = athlete.id

      const athleteAccount = {
        athleteId,
        accountNumber: unitAccountResponse.data.attributes.accountNumber,
        routingCode: unitAccountResponse.data.attributes.routingNumber
      }

      sinon.assert.calledWith(persistAccountStub, athleteAccount);
    });

    it("should persist athlete account in TPC once", async () => {
      createApplicationStub.resolves(unitApplicationApprovedResponse);
      updateUnitDataStub.resolves(arbitrary);
      createAccountStub.resolves(unitAccountResponse);
      persistAccountStub.resolves(arbitrary);

      await createAppAndAccount(ssn, athleteWithoutCustId);

      const athleteId = athlete.id

      sinon.assert.calledOnce(persistAccountStub);
    });
  });
});
