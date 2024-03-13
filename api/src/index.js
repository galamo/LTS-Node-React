const express = require("express");
require("dotenv").config();
console.log(process.env.PORT);
const { usersRouter } = require("./users");
const { eventsRouter } = require("./events");

const { logStarted } = require("./middleware/logStarted");
const { attachRequestId } = require("./middleware/requestId");

const app = express();

app.get("/health-check", (req, res) => {
  res.send("Api is UP");
});

app.use(logStarted);
app.use(attachRequestId);
app.use("/users", usersRouter);
app.use("/events", eventsRouter);

app.use((error, req, res, next) => {
  console.log(error.message, res.getHeader("x-request-id"), req.path);
  return res.send("something went wrong");
});

app.listen(process.env.PORT, () => {
  console.log("Api is up!");
});

// DONT DO THIS !!!!
// app.get("/short", (req, res) => {
//   res.send("Short " + new Date().toISOString());
// });
// // DONT DO THIS!!!
// app.get("/long", (req, res) => {
//   for (let index = 0; index < 9999999999; index++) {}
//   res.send("Long " + new Date().toISOString());
// });
