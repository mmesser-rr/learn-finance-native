const availableName = ["SAVINGS", "SPENDING","INVESTMENTS"];
const R = require("ramda");


const podNaming = (athlete) => {
   const podNames = athlete?.accounts?.items;
   let podCount = 0; 
   let availablePod = "EXTRA";
   const res = R.forEach(podName => {
    if(!R.find(R.propEq('podName', podName))(podNames) && podCount == 0){
        podCount = 1;
        availablePod = podName;
    }
   }, availableName);
   return availablePod
}

module.exports = {
    podNaming
  }
  