const mongoose = require("mongoose");

const restopSchema = new mongoose.Schema({
  item: String,
  alias: String,
  cost: Number,
  qtyOnHand: Number,
  par: Number,
  orderQty: { type: Number, default: 0 },
  vendor: String,
  notes: String,
  img: String,
});

const Restop = mongoose.model("restop", restopSchema);
module.exports = Restop;

//restop images with alias view
