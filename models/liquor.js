const mongoose = require("mongoose").set("debug", true);

const liquorSchema = new mongoose.Schema({
  brand: String,
  type: String,
  vendor: String,
  cost: Number,
  qtyOnHand: Number,
  par: Number,
  orderQty: { type: Number, default: 0 },
  notes: { type: String, default: "n/a" },
});

const Liquor = mongoose.model("liquor", liquorSchema);
module.exports = Liquor;
//testing the mongodb object
// const test = new Liquor({});
// console.log(test);
