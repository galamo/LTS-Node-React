const axios = require("axios");
const RandomUsersUrl = "https://randomuser.me/api/";

async function getUsersByGender(numOfResults, gender) {
  const queryParamsString = `?results=${numOfResults}&gender=${gender}`;
  const result = await axios.get(RandomUsersUrl + queryParamsString);
  const { data } = result;
  const { results } = data;
  const fullNames = results.map((user) => {
    return `Hi ${user?.name?.title}, full name: ${user?.name?.first} ${user?.name?.last}`;
  });
  return fullNames;
}

module.exports = { getUsersByGender };
