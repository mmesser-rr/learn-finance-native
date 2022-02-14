const { Unit } = require("@unit-finance/unit-node-sdk");

const IP = "127.0.0.1";
const COUNTRY_CODE = "US";
const APPLICATION_TYPE = "individualApplication";

const parseAddress = (unit) => ({
  streetAddress,
  apt,
  city,
  state,
  zipCode
}) => unit.helpers.createAddress(streetAddress, apt, city, state, zipCode, "US");

const parseApplicationParams = (unit) => (
  ssn,
  {
    firstName,
    lastName,
    dateOfBirth,
    address,
    email,
    phone
  }
) => ({
  type: APPLICATION_TYPE,
  attributes: {
    ssn: ssn,
    fullName: unit.helpers.createFullName(firstName, lastName),
    dateOfBirth: dateOfBirth,
    address: parseAddress(unit)(address),
    email: email,
    phone: unit.helpers.createPhone("1", phone)
  }
});

const createApplication = (unit) => (ssn, athlete) => {
  const unitParams = parseApplicationParams(unit)(ssn, athlete);
  return unit.applications.create(unitParams); 
}

module.exports = {
  createApplication
}
