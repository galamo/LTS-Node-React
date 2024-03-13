const axios = require("axios");
// console.log(axios);
const URL = "https://restcountries.com/v3.1/all";
async function getCountries() {
  try {
    const result = await axios.get(URL);
    const countries = result.data;
    countries.map((c) => console.log(c?.name?.common));
  } catch (error) {
    console.log(error.message);
  }
}
getCountries();
