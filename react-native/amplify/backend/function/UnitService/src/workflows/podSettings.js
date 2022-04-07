const tpc = require("../wrappers/tpc");
const {axios} = require("../env");

// const podSettingsUpdate = (athleteId, savings, investments, spending) => tpc.getAthlete(athleteId).then(athlete => 
//   (athlete != null) ? 
//     checkPodData(savings, investments, spending, athleteId): 
//     Promise.reject(`No athlete found with id ${athleteId}`)
// );

const checkPodData = (athlete, savings, investments, spending) => {
   const totalPod = savings + investments + spending;
   if(totalPod != 100){
    Promise.reject(`Invalid pod settings ${athlete.id}`)
   }

   const podSettings = ({
    SAVINGS: savings,
    INVESTMENTS: investments,
    SPENDING: spending
    });
  return tpc.updatePodSettings(axios, athlete.id, podSettings)
}
module.exports.podSettings = async (event) => {
  axios.defaults.headers["Authorization"] = event.request.headers.authorization; 
  const {athleteId, savings, investments, spending} = event.arguments;
  return tpc.getAthlete(axios, athleteId).then(res => checkPodData(res, savings, investments, spending))
}
