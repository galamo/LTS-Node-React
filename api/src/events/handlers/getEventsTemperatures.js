const data = require("../../data/d.json");
function getEventsTemperatures() {
  const { PumpEvents } = data;
  if (!Array.isArray(PumpEvents)) return;
  return PumpEvents.map((ev) => {
    return Number(
      ev?.EventData?.toLowerCase()
        ?.split("temperature")[1]
        ?.split(",")[0]
        ?.replace("[", "")
        ?.replace("]", "")
        ?.trim()
    );
  }).filter((t) => t);
}

module.exports = { getEventsTemperatures };
