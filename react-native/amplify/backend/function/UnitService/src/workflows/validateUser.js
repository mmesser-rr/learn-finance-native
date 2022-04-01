
const validateUser = (event) => {
    authUser = event.requestContext.authorizer.claims.sub;
    athleteId = event.arguments.athleteId;
  if (authUser !== athleteId) {
    throw new Error("Invalid auth!!");
  }
  return event.headers.authorization;
}

module.exports = {
    validateUser
}
