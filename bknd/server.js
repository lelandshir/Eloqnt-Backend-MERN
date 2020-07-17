//dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// const PORT = 8008;

//middleware stack
app.use(express.json()); //expect a json body not urlencoded
app.use(express.static("public"));
app.use(cors());

//controllers
const liquorController = require("./controllers/liquor.js");
const restopController = require("./controllers/restop.js");
const foodController = require("./controllers/food.js");
app.use("/liquor", liquorController);
app.use("/restop", restopController);
app.use("/food", foodController);

//connections
let MONGO_URI = "";
if (process.env.NODE_ENV === "production") {
  MONGO_URI = process.env.DB_URL;
} else {
  MONGO_URI = "mongodb://localhost:27017/eloqnt";
}
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: false,
});
mongoose.connection.once("open", () => {
  console.log("and the ELOQNT SubDB is connected to Mongod.");
});

app.set("port", process.env.PORT || 8008);
app.listen(app.get("port"), () => {
  console.log(`ELOQNT is listening on PORT : ${app.get("port")}`);
});
