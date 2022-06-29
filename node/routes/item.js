const express = require("express");
const Item = require("../models/Item");
const router = express.Router();

//get all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.json({ msg: err });
  }
});
// get a specific item
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.json({ msg: err });
  }
});
// delete a specific item
router.delete("/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    item.remove();
    res.json(item);
  } catch (err) {
    res.json({ msg: err });
  }
});
// update a specific item
router.patch("/:id", async (req, res) => {
  try {
    const updatedItem = await Item.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          quantity: req.body.quantity,
          category: req.body.category,
        },
      }
    );
    res.json(updatedItem);
  } catch (err) {
    res.json({ msg: err });
  }
});
//add item
router.post("/", async (req, res) => {
  const item = new Item({
    title: req.body.title,
    price: req.body.price,
    quantity: req.body.quantity,
    category: req.body.category,
  });
  try {
    const savedItem = await item.save();
    res.json(savedItem);
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
