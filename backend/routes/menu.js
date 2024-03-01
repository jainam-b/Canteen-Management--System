const express = require("express");
const { Router } = require("express");
const router = Router();
const { Menu } = require("../db");
// const userMiddleware = require("../middlewares/user");

router.post("/add-item", async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    const newItem = await Menu.create({
      name,
      description,
      price,
      category,
    });

    res.json(newItem);
  } catch (error) {
    console.error("Error adding menu item:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
