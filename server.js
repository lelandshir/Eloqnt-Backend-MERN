//dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8008;

//middleware stack
app.use(express.json()); //expect a json body not urlencoded
app.use(express.static("public"));

//controllers
const liquorController = require("./controllers/liquor.js");
app.use("/liquor", liquorController);

//connections
mongoose.connect("mongodb://localhost:27017/eloqnt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: false,
});
mongoose.connection.once("open", () => {
  console.log("and the ELOQNT SubDB is connected to Mongod.");
});
app.listen(PORT, () => {
  console.log(`ELOQNT is listening on PORT ${PORT}`);
});
