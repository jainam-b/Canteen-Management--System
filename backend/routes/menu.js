const express = require("express");
const { Router } = require("express");
const router = Router();
const { Menu,Order } = require("../db");
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


// GET endpoint to fetch orders with menu item names
router.get('/itemnames', async (req, res) => {
  try {
    // Retrieve orders with populated menu items
    const orders = await Order.find()
      .populate({
        path: 'items.itemId', // Populate the 'items' array with the 'itemId' field referencing the MenuItem model
        select: 'name price', // Select only the 'name' and 'price' fields from the MenuItem model
      })
      .exec();

    // Map over the orders to format the response
    const formattedOrders = orders.map(order => {
      return {
        orderId: order._id,
        user: order.user,
        totalPrice: order.totalPrice,
        status: order.status,
        createdAt: order.createdAt,
        items: order.items.map(item => ({
          name: item.itemId.name,
          price: item.itemId.price,
          quantity: item.quantity
        }))
      };
    });

    res.json(formattedOrders);
  } catch (error) {
    console.error('Error fetching orders with items:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
