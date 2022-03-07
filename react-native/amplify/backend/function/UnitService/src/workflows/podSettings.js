const tpc = require("../wrappers/tpc");

const podSettingsUpdate = (data, athleteId) => tpc.getAthlete(athleteId).then(athlete => 
  (athlete != null) ? 
    checkPodData(data, athleteId): 
    Promise.reject(`No athlete found with id ${athleteId}`)
);

const checkPodData = (data, athleteId) => {
   const totalPod = data.savings + data.investments + data.spending;
   if(totalPod != 100){
    Promise.reject(`Invalid pod settings ${athleteId}`)
   }
   const podSettings = ({
    SAVINGS: data.savings,
    INVESTMENTS: data.investments,
    SPENDING:data.spending
    });
  return tpc.updatePodSettings(athleteId, podSettings)
}
module.exports.podSettings = async (event) => {
  const {athleteId, data} = event.arguments;
  return podSettingsUpdate(data, athleteId)
}
