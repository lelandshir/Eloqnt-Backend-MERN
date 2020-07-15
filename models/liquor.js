const mongoose = require("mongoose").set("debug", true);

const liquorSchema = new mongoose.Schema({
  brand: { type: String, default: "brand" },
  type: { type: String, default: "type" },
  vendor: { type: String, default: "vendor" },
  cost: { type: Number, default: 0 },
  qtyOnHand: { type: Number, default: 0 },
  par: { type: Number, default: 0 },
  orderQty: { type: Number, default: 0 },
  notes: String,
  onOrder: { type: Boolean, default: false },
});

const Liquor = mongoose.model("liquor", liquorSchema);
module.exports = Liquor;
//testing the mongodb object
// const test = new Liquor({});
// console.log(test);
