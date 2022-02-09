const { createAccount, createApplication, getApplication } = require("./wrappers/unit");
const { persistAccount } = require("./wrappers/graphql");
const env = require("./env.js");
const { compose } = require("ramda");

//Heres what we gotta do
//
// make request to unit for an athlete customer
// update unit status for customer
// if approved, make a request to open an account
// if successful, add an account for the customer
//
// setup athlete address
// link athlete with athlete address

const address = {                                                                   
  streetAddress: "20 Ingram St.",
  apt: "3",                                                                         
  city: "Forest Hills",                                                             
  state: "CA",
  zipCode: "11375"                                                                  
}

const example = {                                                                   
  ssn: "000000005",
  firstName: "Richard",
  lastName: "Hendricks",                                                            
  dateOfBirth: "2001-08-10",                                                        
  address: address,
  unitLookup: {
    appId: "228152",
    custId: "191485"
  },
  email: "april@baxter.com",
  phone: "2025550158",
};


const createAndPersistAccount = (custId) => {
  const createAccountInUnitR = createAccount(custId).local(env => env.unit);

  return createAccountInUnitR.map(prom =>
    prom
      .then(res => persistAccountInBackend(res))
  );
}

const accountFromUnitParams = (unitResponse) => (
  {
    routingCode: unitResponse.data.attributes.routingNumber,
    accountNumber: unitResponse.data.attributes.accountNumber
  }
)

const persistAccountInBackend = (unitResponse) =>
  compose(persistAccount, accountFromUnitParams)(unitResponse)
    .local(env => env.axios);

const createAccountFor = (athlete) => {
  const custId = athlete?.unitLookup?.custId;
  if (custId === undefined) {
    throw new Error("Athlete does not have a unit customer id. Has their unit application been approved?");
  }

  return createAndPersistAccount(custId);
}

createAccountFor(example).run(env);
exports.handler = async (event) => createAccountFor(example).run(env);
