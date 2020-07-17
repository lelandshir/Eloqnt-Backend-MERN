const express = require("express");
const router = express.Router();
const Food = require("../models/food.js");

router.put("/:id", (req, res) => {
  Food.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedFood) => {
      res.json(updatedFood);
    }
  );
});

router.delete("/:id", (req, res) => {
  Food.findByIdAndRemove(req.params.id, (err, deletedFood) => {
    res.json(deletedFood);
  });
});

router.post("/", (req, res) => {
  Food.create(req.body, (err, newFood) => {
    res.json(newFood);
  });
});

router.get("/", (req, res) => {
  Food.find({}, (err, allFood) => {
    res.json(allFood);
  });
});

module.exports = router;
