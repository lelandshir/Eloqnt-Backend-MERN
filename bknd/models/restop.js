const mongoose = require("mongoose");

const restopSchema = new mongoose.Schema({
  item: String,
  alias: { type: String, default: "no alias" },
  cost: { type: Number, default: 0 },
  qtyOnHand: { type: Number, default: 0 },
  par: { type: Number, default: 0 },
  orderQty: { type: Number, default: 0 },
  onOrder: { type: Boolean, default: false },
  vendor: String,
  notes: String,
  img: String,
});

const Restop = mongoose.model("restop", restopSchema);
module.exports = Restop;
