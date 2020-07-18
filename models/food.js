const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  item: String,
  category: String,
  cost: Number,
  qtyOnHand: Number,
  par: Number,
  vendor: String,
  orderQty: { type: Number, default: 0 },
  notes: String,
});

const Food = mongoose.model("food", foodSchema);
module.exports = Food;
