//dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8008;

//middleware stack
app.use(express.json()); //expect a json body not urlencoded
app.use(express.static("public"));
app.use(cors());

//require routes
const liquorController = require("./controllers/liquor.js");
const restopController = require("./controllers/restop.js");
const foodController = require("./controllers/food.js");
const userController = require("./controllers/user.js");
//use routes
app.use("/liquor", liquorController);
app.use("/restop", restopController);
app.use("/food", foodController);
app.use("/user", userController);

//connections
let MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: false,
});
mongoose.connection.once("open", () => {
  console.log("ELOQNT is connected to MongoDB.");
});

// app.set(PORT);
app.listen(PORT, () => {
  console.log(`ELOQNT is listening on PORT: ${PORT}`);
});
