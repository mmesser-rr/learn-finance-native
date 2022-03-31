/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["API_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */;
 var aws = require('aws-sdk');
 var axios = require('axios');


exports.handler = async (event) => {
  const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["API_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  }).promise();

  const API_KEY = Parameters[0].Value;
  const APP_NAME = "appagSs6ldVSHpf7x";
  const TABLE_NAME = "tblxKZ5INOIQSDtsM"
  
  var config = {
    method: 'get',
    url: `https://api.airtable.com/v0/${APP_NAME}/${TABLE_NAME}`,
    headers: { 
      'Authorization': `Bearer ${API_KEY}`
    }
  };

  return axios(config)
      .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
};





