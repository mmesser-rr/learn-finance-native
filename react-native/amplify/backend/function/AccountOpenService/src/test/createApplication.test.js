const assert = require('assert');

const { parseApplicationParams } = require("../wrappers/unit");

describe('parseApplicationParams', () => {
  const address = { 
    streetAddress: "20 Ingram St.",
    apt: "3",
    city: "Forest Hills",
    state: "CA",
    zipCode: "11375",
  }

  const params = { 
    ssn: "000000002",
    firstName: "Richard",
    lastName: "Hendricks",
    dateOfBirth: "2001-08-10",
    address: address,
    email: "april@baxter.com",
    phone: "2025550158",
    ip: "127.0.0.1",
  };

  const expectedResult = {
    ssn: '000000002',
    fullName: { first: 'Richard', last: 'Hendricks' },
    dateOfBirth: '2001-08-10',
    address: {
      street: '20 Ingram St.',
      street2: '3',
      city: 'Forest Hills',
      state: 'CA',
      postalCode: '11375',
      country: 'US'
    },
    email: 'april@baxter.com',
    phone: { countryCode: '1', number: '2025550158' }
  }

  it("should match parameters from our domain with parameters expected by unit API", async () => {
    assert.deepEqual(parseApplicationParams(params), expectedResult);
  });
});
