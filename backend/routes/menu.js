const express = require("express");
const { Router } = require("express");
const router = Router();
const { Menu } = require("../db");
// const userMiddleware = require("../middlewares/user");

router.post("/add-items", async (req, res) => {
  try {
    const items = req.body; // Assuming req.body is an array of items

    // Validate that req.body is an array
    if (!Array.isArray(items)) {
      return res.status(400).json({ message: "Items should be provided as an array" });
    }

    // Insert each item into the database
    const newItems = await Menu.insertMany(items);

    res.json(newItems);
  } catch (error) {
    console.error("Error adding menu items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


router.get("/get-items", async (req, res) => {
  try {
    const items = await Menu.find();

    res.json({ items: items });
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
})

module.exports = router;
