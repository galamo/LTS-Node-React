const express = require("express");
const { getUsersByGender } = require("./handlers/getUserByGender");

const usersRouter = express.Router();

usersRouter.get("/get-user-by-gender", async (req, res) => {
  const query = req.query;
  //   input validation
  try {
    const result = await getUsersByGender(query.results, query.gender);
    return res.json(result);
  } catch (error) {
    console.log(error.message, res.getHeader("x-request-id"));
    return res.send("something went wrong");
  }
});

module.exports = { usersRouter };
