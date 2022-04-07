
const validateUser = (event) => {
    authUser = event.identity?.claims.sub;
    athleteId = event.arguments.athleteId;
  if (authUser !== athleteId) {
    throw new Error("Invalid auth!!");
  }
  return event.request.headers.authorization;
}

module.exports = {
    validateUser
}
