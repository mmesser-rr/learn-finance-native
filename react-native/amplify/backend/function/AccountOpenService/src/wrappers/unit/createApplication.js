const R = require("ramda");
const { Reader } = require("monet");

const { Unit } = require("@unit-finance/unit-node-sdk");

const IP = "127.0.0.1";
const COUNTRY_CODE = "US";
const APPLICATION_TYPE = "individualApplication";

const parseAddress = ({
  streetAddress,
  apt,
  city,
  state,
  zipCode
}) => Reader(unit => unit.helpers.createAddress(streetAddress, apt, city, state, zipCode, "US"));

const parseApplicationParams = ({
  ssn,
  firstName,
  lastName,
  dateOfBirth,
  address,
  email,
  phone
}) => Reader(unit => ({
  type: APPLICATION_TYPE,
  attributes: {
    ssn: ssn,
    fullName: unit.helpers.createFullName(firstName, lastName),
    dateOfBirth: dateOfBirth,
    address: parseAddress(address).run(unit),
    email: email,
    phone: unit.helpers.createPhone("1", phone)
  }
}));

const createApplicationFromUnitParams = (unitParams) => Reader(unit => unit.applications.create(unitParams));

const createApplication = (params) =>
  parseApplicationParams(params).bind(unitParams => createApplicationFromUnitParams(unitParams));

module.exports = {
  createApplication: createApplication,
  parseApplicationParams
}
