const tpc = require("../wrappers/tpc");
const { validateUser } = require("./validateUser");

const podSettingsUpdate = (event, athleteId, savings, investments, spending) => tpc.getAthlete(validateUser(event),athleteId).then(athlete => 
  (athlete != null) ? 
    checkPodData(event,savings, investments, spending, athleteId): 
    Promise.reject(`No athlete found with id ${athleteId}`)
);

const checkPodData = (event, savings, investments, spending, athleteId) => {
   const totalPod = savings + investments + spending;
   if(totalPod != 100){
    Promise.reject(`Invalid pod settings ${athleteId}`)
   }
   const podSettings = ({
    SAVINGS: savings,
    INVESTMENTS: investments,
    SPENDING: spending
    });
  return tpc.updatePodSettings(event, athleteId, podSettings)
}
module.exports.podSettings = async (event) => {
  const {athleteId, savings, investments, spending} = event.arguments;
  return podSettingsUpdate(event, athleteId, savings, investments, spending)
}
