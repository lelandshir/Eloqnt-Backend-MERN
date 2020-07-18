const express = require("express");
const router = express.Router();
const Restop = require("../models/restop.js");

router.put("/:id", (req, res) => {
  Restop.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedRestop) => {
      res.json(updatedRestop);
    }
  );
});

router.delete("/:id", (req, res) => {
  Restop.findByIdAndRemove(req.params.id, (err, deletedRestop) => {
    res.json(deletedRestop);
  });
});

router.post("/", (req, res) => {
  Restop.create(req.body, (err, newRestop) => {
    res.json(newRestop);
  });
});

router.get("/", (req, res) => {
  Restop.find({}, (err, allRestop) => {
    res.json(allRestop);
  });
});

module.exports = router;
