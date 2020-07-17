const express = require("express");
const router = express.Router();
const test = "eloqnt: liquor index";
const Liquor = require("../models/liquor.js");

router.put("/:id", (req, res) => {
  Liquor.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedLiquor) => {
      res.json(updatedLiquor);
    }
  );
});

router.delete("/:id", (req, res) => {
  Liquor.findByIdAndRemove(req.params.id, (err, deletedLiquor) => {
    res.json(deletedLiquor);
  });
});

router.post("/", (req, res) => {
  Liquor.create(req.body, (err, newLiquor) => {
    res.json(newLiquor);
  });
});

router.get("/", (req, res) => {
  Liquor.find({}, (err, allLiquor) => {
    res.json(allLiquor);
  });
});

module.exports = router;
