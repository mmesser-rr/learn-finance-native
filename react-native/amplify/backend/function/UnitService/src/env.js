const fs = require('fs');
const { compose } = require("ramda");
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');

const { Unit } = require("@unit-finance/unit-node-sdk");
const axios = require('axios');
const jsonFile = compose(JSON.parse, fs.readFileSync)("./defaultEnv.json")

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

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': getEnvOrJson('CLIENT_ID'),
      'PLAID-SECRET': getEnvOrJson('SAND_KEY'),
    },
  },
});


const devEnv = () => ({
  plaid: new PlaidApi(configuration),
  webhooksecret: getEnvOrJson('UNIT_TOKEN'),
  unit: new Unit(getEnvOrJson('UNIT_TOKEN'), getEnvOrJson('UNIT_API_URL')),
  axios: axios.create({
    baseURL: getEnvOrJson("API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT"),
    headers: {
      'Authorization': "eyJraWQiOiJXNVwvTFErTlhPZ0U0bXMwM2MzWmF4eEwyQ09DSFAyUGl6ajQ1T1dnREp0ND0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIzZWM0NzBhNy0xYTJhLTQzZTgtODZkMS03YjFiZWExYWRkODgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9IempvSTRCQzciLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOnRydWUsImNvZ25pdG86dXNlcm5hbWUiOiIzZWM0NzBhNy0xYTJhLTQzZTgtODZkMS03YjFiZWExYWRkODgiLCJvcmlnaW5fanRpIjoiMjczNzAxZjItNTM2ZS00YWYyLWFmZjUtNzJiMjlhNDY4ZGJmIiwiYXVkIjoiNWQyaWk4dm4yajJrcmxtdGlpdjVqY2Y5ZW8iLCJldmVudF9pZCI6IjdkYWM5ZWQzLWM2Y2EtNDFhYy1iYzA5LTMyOWM0MjM0N2I1YiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQ4NjU0MzQ3LCJwaG9uZV9udW1iZXIiOiIrMTQ4NDkyNjkwNjAiLCJleHAiOjE2NDg3MjM5NzcsImlhdCI6MTY0ODcyMDM3NywianRpIjoiMmZiZmJlMzAtYmM1ZC00ODk2LWJjNzYtNTI5OWEyODFiOWRkIn0.ihcQvaknHPdaiIYfDyp71rpjEdxR1YIuLpeJ2Up7bLUlyT3rAv0xfaYPXJrnWJO2xtWa-jlHWVGIEqyG92LaHtY15imtpKMIQsdQXrGF7Qo96r5Saf6PY2WaqJOnJjeazZ0AuhDD_hjFd6K9lRkkbsIYXB1_i9U96j4kw_n8ImO06oMlJHxcAQPpvklcO7LghxTgy0iIeZps5OQ3JrFh5GJfa_Qz6gPyWCeC5VtV8rPKsHVcbAIY-lmAcx9K9_3ELmL9UhLE_aJWuRZQ9Ht0eBZnhp0mWsgkDMvbpEc_zidoh1H-SpxkXY3lFo71A6WbtN3Tcz3DhQOR8_Jt_1llew"
      //'x-api-key': getEnvOrJson("API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT")
    }
  })
})


const liveEnv = () => ({
  plaid: new PlaidApi(configuration),
  unit: new Unit(getEnv('UNIT_TOKEN'), getEnv('UNIT_API_URL')),
  axios: axios.create({
    baseURL: getEnv("API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT"),
    headers: {
      //'x-api-key': getEnv("API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT")
    }
  })
});

const fetchDevOrLiveEnv = () => {
  const nodeEnv = getEnv('NODE_ENV');

  if (nodeEnv == 'production') {
    return liveEnv();
  } else if (nodeEnv == 'development') {
    return devEnv();
  }
}

module.exports = fetchDevOrLiveEnv();