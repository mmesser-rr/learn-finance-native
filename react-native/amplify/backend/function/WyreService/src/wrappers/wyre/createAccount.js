const paramsFromCustId = (athlete) => ({
    name: athlete.id,
    type: "SAVINGS",
  // type: "INDIVIDUAL",
  // "country": "US",
  // "subaccount": true,
  // "profileFields": [
  //     {
  //         "fieldId": "individualLegalName",
  //         "value": athlete.name
  //     },
  //     {
  //         "fieldId": "individualEmail",
  //         "value": athlete.email
  //     },
  //     {
  //       "fieldId": "individualDateOfBirth",
  //       "value": athlete.dateOfBirth
  //   },
  //     {
  //         "fieldId": "individualResidenceAddress",
  //         "value": {
  //             "street1": athlete.address.streetAddress,
  //             "street2": athlete.address.apt,
  //             "city": athlete.address.city,
  //             "state": athlete.address.state,
  //             "postalCode": athlete.address.zipCode,
  //             "country": "US"
  //         }
  //     }
  // ]
});

const createAccount = (wrye) => (athlete) => {
  const params = paramsFromCustId(athlete);
  return wrye.CreateWallet(params)
  .catch(err => Promise.reject(`Failed to reach Wyre API. Error: ${err.message}`));
};

module.exports = {
  createAccount
}
