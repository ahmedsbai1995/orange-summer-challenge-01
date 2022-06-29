const express = require("express");
const User = require("../models/User");
const router = express.Router();

//get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ msg: err });
  }
});
// get a specific user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.json({ msg: err });
  }
});
// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user.password == req.body.password) {
      res.json(user);
    } else {
      res.json({ msg: "mot de passe incorrect" });
    }
  } catch (err) {
    res.json({ msg: "user does not exist" });
  }
});
// delete a specific user
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.remove();
    res.json(user);
  } catch (err) {
    res.json({ msg: err });
  }
});
// update a specific user
router.patch("/:id", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      {
        $set: {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          type: req.body.type,
        },
      }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ msg: err });
  }
});
//add user
router.post("/", async (req, res) => {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    type: req.body.type,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
