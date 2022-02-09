const { Reader } = require("monet");

const getApplication = (appId) => Reader(unit => unit.applications.get(appId));

module.exports = {
  getApplication
}
