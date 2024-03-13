const data = require("../../data/d.json");
function getEventsByType(type) {
  const { PumpEvents } = data;
  if (!Array.isArray(PumpEvents)) return;
  return PumpEvents.filter((ev) => ev.ActionType === type);
}

module.exports = { getEventsByType };
