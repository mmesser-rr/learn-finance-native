// const { print } = require('graphql');
// const gql = require('graphql-tag');

// const axios = require('axios');

// const API_URL = process.env.API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT;
// const API_KEY = process.env.API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT;

// const getAthleteStatement = gql`
//   query getAthlete($phoneNumber: String!) {
//     getAthlete(phoneNumber: $phoneNumber) {
//       id
//       lastName
//       firstName
//       email
//       mobilePhone
//       podSettings{
//         SAVINGS
//         INVESTMENTS
//         SPENDING
//       }
//       accounts {
//         items{
//           unitAccountId
//           podName
//         }
//       }
//     }
//   }
// `

// const responseLens = (res) => res?.data?.errors ? Promise.reject(res.data.errors) : Promise.resolve(res.data.data.getAthlete);

// const graphqlRequest = (data) => axios({
//     url: API_URL,
//     method: 'post',
//     headers: {
//       'x-api-key': API_KEY,
//     },
//     data: data
//   })



// const getAthleteByPhone = async (phoneNumber) => graphqlRequest({
//     query: print(getAthleteStatement),
//     variables: {
//       phoneNumber: phoneNumber
//     }
//   })
//   .then(responseLens);


// module.exports = {
//     getAthleteByPhone
// }
