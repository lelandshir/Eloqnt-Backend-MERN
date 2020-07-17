const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  item: String,
  category: String,
  cost: { type: Number, default: 0 },
  qtyOnHand: { type: Number, default: 0 },
  par: { type: Number, default: 0 },
  orderQty: { type: Number, default: 0 },
  onOrder: { type: Boolean, default: false },
  vendor: String,
  notes: String,
});

const Food = mongoose.model("food", foodSchema);
module.exports = Food;
