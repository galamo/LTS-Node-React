const express = require("express");
const { getEventById } = require("./handlers/getEventById");
const { getEventsTemperatures } = require("./handlers/getEventsTemperatures");
const { getEventsByType } = require("./handlers/getEventsByType");
const { PumpsModel } = require("../db/models/pump");
const eventsRouter = express.Router();

eventsRouter.get("/action-type/:type", async (req, res, next) => {
  try {
    const type = req.params.type;
    if (Number(type) > 10) {
      throw new Error("Type is Invalid - cannot be higher than 10");
    }
    const result = getEventsByType(req.params.type);
    if (!result.length) throw new Error("No data");
    return res.json(result);
  } catch (error) {
    return next(error);
  }
});

eventsRouter.get("/temp", async (req, res, next) => {
  try {
    const result = getEventsTemperatures();
    res.json(result);
  } catch (error) {
    return next(error);
  }
});

eventsRouter.get("/data", async (req, res, next) => {
  try {
    const result = await PumpsModel.find({
      PumpEvents: { $elemMatch: { ActionType: "1" } },
    });
    const pumpEvents = result.map((doc) => doc.PumpEvents).flat();
    return res.json(pumpEvents);
  } catch (error) {
    console.log("DB ERROR");
    return next(error);
  }
});

eventsRouter.get("/:id", async (req, res, next) => {
  // input validation
  try {
    const event = getEventById(Number(req.params.id));
    res.json(event || {});
  } catch (error) {
    return next(error);
  }
});

module.exports = { eventsRouter };
