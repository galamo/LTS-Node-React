const express = require("express");

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

// app.get("/short", (req, res) => {
//   res.send("Short " + new Date().toISOString());
// });
// // DONT DO THIS!!!
// app.get("/long", (req, res) => {
//   for (let index = 0; index < 9999999999; index++) {}
//   res.send("Long " + new Date().toISOString());
// });

app.listen(3000, () => {
  console.log("Api is up!");
});
