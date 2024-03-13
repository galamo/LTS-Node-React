import express from "express";

const app = express();
app.get("/test", (req, res) => {
  res.send("aaaaa");
});
app.listen(3333);
