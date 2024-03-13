const data = require("./data.json");
if (Array.isArray(data.cars)) {
  //   console.log(data.cars);
}

function getCarsFromServer(year) {
  return new Promise((resolve, reject) => {
    if (typeof year !== "number") reject();
    setTimeout(function () {
      resolve(data.cars.filter((car) => car.year === year));
    }, 2000);
  });
}
console.log("Script Started");

getCarsFromServer(2020)
  .then((d) => {
    console.log(d);
  })
  .catch(() => {
    console.log("Something went wrong!!");
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
