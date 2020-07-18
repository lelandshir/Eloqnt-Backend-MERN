const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedUser) => {
      res.json(updatedUser);
    }
  );
});

router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
    res.json(deletedUser);
  });
});

router.post("/", (req, res) => {
  User.create(req.body, (err, newUser) => {
    res.json(newUser);
  });
});

router.get("/", (req, res) => {
  User.find({}, (err, allUser) => {
    res.json(allUser);
  });
});

module.exports = router;
