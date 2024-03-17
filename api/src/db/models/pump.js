const mongoose = require("mongoose");

const { Schema } = mongoose;

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

const PumpData = new mongoose.Schema({
  AuthorizationResponse: String,
  TotalResults: Number,
  FilteredResults: Number,
  PumpEvents: [PumpEvent],
});

const PumpsModel = mongoose.model("pump_data", PumpData);
module.exports = { PumpsModel };
