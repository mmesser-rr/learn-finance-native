const { Reader, Either } = require("monet");

const getApplication = (appId) => Reader(unit => Either.fromPromise(unit.applications.get(appId)));

module.exports = {
  getApplication
}
