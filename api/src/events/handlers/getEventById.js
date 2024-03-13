const data = require("../../data/d.json");
function getEventById(id) {
  const { PumpEvents } = data;
  if (!Array.isArray(PumpEvents)) return;
  return PumpEvents.find((ev) => ev.Index === id);
}

module.exports = { getEventById };
