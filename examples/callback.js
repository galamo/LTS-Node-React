const data = require("./data.json");
if (Array.isArray(data.cars)) {
  //   console.log(data.cars);
}

function getCarsFromServer(callbackFunction) {
  if (typeof callbackFunction !== "function") return;
  //   validate another param

  setTimeout(() => {
    callbackFunction(data.cars);
  }, 4000);
}
console.log("Script Started");
getCarsFromServer((cars) => {
  console.log(cars);
});
console.log("Script Ended");
