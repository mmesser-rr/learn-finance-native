
const validateUser = (event) => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(JSON.stringify(event))
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(event)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    authUser = event?.requestContext?.authorizer?.claims.sub;
    athleteId = event.arguments.athleteId;
  if (authUser !== athleteId) {
    return new Error("Invalid auth!!");
  }
  return event.headers.authorization;
}

module.exports = {
    validateUser
}
