const mongoose = require("mongoose");

// mongoose.set("strictQuery", false)

const mongoDBUrl = "mongodb://127.0.0.1:27017/pumps";

async function mainConnection() {
  await mongoose.connect(mongoDBUrl);
}

module.exports = function initConnection() {
  mainConnection()
    .then(() => {
      console.log("DB Connected");
    })
    .catch(() => {
      console.log("ERROR DB not Connected");
    });
};
