const axios = require("axios");
// console.log(axios);
const URL = "https://restcountries.com/v3.1/all";
async function getCountries() {
  try {
    const result = await axios.get(URL);
    const { data } = result;
    const countries = data;
    countries.map((c) => console.log(c?.name?.common));
  } catch (error) {
    console.log(error.message);
  }
}
// getCountries();
const RandomUsersUrl = "https://randomuser.me/api/?results=";
async function getUsers(numberOfUsers) {
  try {
    if (typeof numberOfUsers !== "number")
      throw new Error("number of users missing");

    const result = await axios.get(RandomUsersUrl + numberOfUsers);
    const { data } = result;
    const { results } = data;
    results.forEach((user) => {
      console.log(
        `Hi ${user?.name?.title}, full name: ${user?.name?.first} ${user?.name?.last}`
      );
    });
  } catch (error) {
    console.log(error.message);
  }
}

getUsers();
