const mongoose = require("mongoose");
const dataShort = require("./dshort.json");
const data = require("./dshort.json");

async function seed() {
  console.log("Starting seed...");
  const mongoDBUrl = "mongodb://127.0.0.1:27017/pumps";

  async function mainConnection() {
    console.log("Starting seed...");

    await mongoose.connect(mongoDBUrl);
  }

  const PumpEvent = new mongoose.Schema({
    ActionType: String,
    DateTime: String,
    EventData: String,
    EventId: Number,
    EventType: String,
    Group: String,
    Index: Number,
    ParsedValues: String,
    RawData: [Number],
    Reserve: Number,
    SerialNumber: String,
    SpacificInfo: Number,
  });

  mainConnection()
    .then(async () => {
      console.log("DB Connected");
      const PumpData = new mongoose.Schema({
        AuthorizationResponse: String,
        TotalResults: Number,
        FilteredResults: Number,
        PumpEvents: [PumpEvent],
      });
      const TestModel = mongoose.model("pump_data", PumpData);
      const PumpEventsModel = mongoose.model("pump_events_data", PumpData);
      const result = await TestModel.insertMany([data, dataShort]);
      const res = await PumpEventsModel.insertMany([
        ...data.PumpEvents,
        ...dataShort.PumpEvents,
      ]);

      console.log(result);
      setTimeout(() => {
        process.exit();
      }, 3000);
    })
    .catch((e) => {
      console.log(e);
      console.log("ERROR DB not Connected");
    });
}

seed();
