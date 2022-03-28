const fs = require('fs');
const { compose } = require("ramda");
const WyreClient = require('@wyre/api').WyreClient
//const tryWrye = require('api')('@wyre-hub/v3#2afn2qkwnogh9o');
const axios = require('axios');
const dir = '/Users/deboajagbe/Desktop/Projects/theplayerscompany-react-native/react-native/amplify/backend/function/UnitService/src';
const jsonFile = compose(JSON.parse, fs.readFileSync)(dir + "/defaultEnv.json")

const getEnv = (varName, required = true) => {
  const varValue = process.env[varName];

  if (required && (varValue == null || varValue === '')) {
    throw new Error(`Environment variable ${varName} not set`);
  }

  return varValue;
}

const getJson = (varName, required = true) => {
  const varValue = jsonFile[varName];

  if (required && (varValue == null || varValue === '')) {
    throw new Error(`${varName} not set in json`);
  }

  return varValue;
}

const getEnvOrJson = (varName, required = true) => getEnv(varName, false) || getJson(varName, required);

const devEnv = () => ({
  wyre: new WyreClient({
    format: "json_numberstring",
    apiKey: getEnvOrJson('API_KEY'),
    secretKey: getEnvOrJson('WYRE_TOKEN'),
    baseUrl: "https://api.testwyre.com"
  }),
  axios: axios.create({
    baseURL: getEnvOrJson("API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT"),
    headers: {
      'x-api-key': getEnvOrJson("API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT")
    }
  })
})

const liveEnv = () => ({
  wyre: new WyreClient({
    format: "json_numberstring",
    apiKey: getEnvOrJson('API_KEY'),
    secretKey: getEnvOrJson('WYRE_TOKEN'),
    baseUrl: "https://api.sendwyre.com"
  }),
  axios: axios.create({
    baseURL: getEnv("API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT"),
    headers: {
      'x-api-key': getEnv("API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT")
    }
  })
});

const fetchDevOrLiveEnv = () => {
  const nodeEnv = getEnvOrJson('NODE_ENV');

  if (nodeEnv == 'production') {
    return liveEnv();
  } else if (nodeEnv == 'development') {
    return devEnv();
  }
}

module.exports = fetchDevOrLiveEnv();