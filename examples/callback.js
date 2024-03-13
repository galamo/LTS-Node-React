const data = require("./data.json");
if (Array.isArray(data.cars)) {
  //   console.log(data.cars);
}

function getCarsFromServer(callbackFunction, year) {
  if (typeof callbackFunction !== "function") return;
  if (typeof year !== "number") return;

  setTimeout(function () {
    callbackFunction(data.cars.filter((car) => car.year === year));
  }, 2000);
}
console.log("Script Started");
getCarsFromServer(function (cars) {
  console.log(cars);
});
console.log("Script Ended");

// function a(r) {
//   return 2 + r;
// }
// a(2);
// const t = (m) => {
//   return 1 + m;
// };
// t(1);
