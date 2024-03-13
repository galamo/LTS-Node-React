const express = require("express");
const { getEventById } = require("./handlers/getEventById");

const eventsRouter = express.Router();

eventsRouter.get("/action-type/:type", async (req, res) => {});

eventsRouter.get("/:id", async (req, res) => {
  // input va;idation
  try {
    const event = getEventById(Number(req.params.id));
    res.json(event || {});
  } catch (error) {
    console.log(error.message, res.getHeader("x-request-id"));
    return res.send("something went wrong");
  }
});



module.exports = { eventsRouter };
