const data = require("./data.json");
if (Array.isArray(data.cars)) {
  //   console.log(data.cars);
}

function getCarsFromServer(year) {
  return new Promise((resolve, reject) => {
    if (typeof year !== "number") reject();
    setTimeout(function () {
      resolve(data.cars.filter((car) => car.year === year));
    }, 3000);
  });
}

function getCurrentPrice(price) {
  return new Promise((resolve, reject) => {
    if (typeof price !== "number") reject();
    setTimeout(function () {
      if (price > 10000) {
        resolve(Math.ceil(price - price * 0.2));
      } else {
        resolve(Math.ceil(price - price * 0.1));
      }
    }, 1000);
  });
}

async function main() {
  console.log("Script Started");
  const start = new Date().getTime();
  const carsFromApi = await getCarsFromServer(2023);
  const finished1 = new Date().getTime();
  console.log(`cars finished at: ${finished1 - start}`);

  const promises = carsFromApi.map((car) =>
    getCurrentPrice(Number(car?.price?.replace("$", "")))
  );

  Promise.all(promises).then((reolvers) => {
    console.log(reolvers);
    const finished2 = new Date().getTime();
    console.log(`cars prices finished at: ${finished2 - start}`);
  });
  //   const currentPrice = await getCurrentPrice(
  //     Number(carFromApi?.price?.replace("$", ""))
  //   );
  //   console.log(`the current price is: ${currentPrice}`);
}

main();
