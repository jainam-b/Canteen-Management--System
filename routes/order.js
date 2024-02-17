const express = require("express");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const { User, Order } = require("../db");
const JWT_SECRET = process.env.JWT_SECRET;
const userMiddleware = require("../middlewares/user");


// Error handling middleware
const errorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: "Internal Server Error" });
};

router.post("/orders", async (req, res) => {
  try {
    const { itemId, customerId } = req.body;

    const existingUser = await User.findById(customerId);

    if (!existingUser) {
      // If the user doesn't exist, return an error
      return res.status(404).json({ msg: "User not found" });
    }

    // Check if there's an existing order for the user
    let existingOrder = await Order.findOne({ customerId });

    if (existingOrder) {
      // If the order exists, check if the item is already in the order
      const existingItemIndex = existingOrder.items.findIndex((item) =>
        item.itemId.equals(itemId)
      );

      if (existingItemIndex !== -1) {
        // If the item exists, increase the quantity
        existingOrder.items[existingItemIndex].quantity += 1;
      } else {
        // If the item is not in the order, add it with a quantity of 1
        existingOrder.items.push({ itemId, quantity: 1 });
      }

      // Save the updated order
      existingOrder = await existingOrder.save();

      // Return the updated order
      return res.json(existingOrder);
    }

    // If the order doesn't exist, create a new order
    const order = await Order.create({
      customerId,
      items: itemId.map((itemId) => ({ itemId })),
    });

    // Return the created order
    res.json(order);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
});

// edit orders endpoint 
router.put("/orders", userMiddleware, async (req, res) => {
  try {
    // Extract the itemId from the request body
    const itemId = req.body.itemId;

    // Find the user based on the username
    const user = await User.findOne({ username: req.username });

    // If user not found, return 404
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Find the order associated with the user's customerId
    let order = await Order.findOne({ customerId: user._id });

    // If no order found, create a new order
    if (!order) {
      order = await Order.create({
        customerId: user._id,
        items: [itemId],
      });
    } else {
      // If order found, update it by appending the new item
      order.items.push(itemId);
      await order.save();
    }

    // Return the updated or newly created order
    res.json(order);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
});

// Retrieve all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve a specific order by ID
router.get("/orders/:orderId", async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);

    if (!order) {
      return res.status(404).json({ msg: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a specific order by ID
router.put("/orders/:orderId", async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, {
      new: true,
    });
    if (!order) {
      return res.status(404).json({ msg: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update the status of a specific order by ID
router.put("/orders/:orderId/status", async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.orderId,
      { status: req.body.status },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ msg: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a specific order by ID
router.delete("/orders/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findByIdAndDelete(orderId);

    if (!order) {
      return res.status(404).json({ msg: "Order not found" });
    }
    res.json({ msg: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// get the details of the menuitems form order table item id 
router.get("/orders/:orderId/items", async (req, res) => {
  try {
    const orderId = req.params.orderId;

    // Find the order by ID and populate the 'items' field with data from the 'MenuItem' collection
    const order = await Order.findById(orderId).populate({
      path: "items.itemId",
      select: "name description -_id", // Exclude '_id' from the selection
    });

    if (!order) {
      return res.status(404).json({ msg: "Order not found" });
    }

    // Extract the name and description of items
    const items = order.items.map((item) => ({
      name: item.itemId.name,
      description: item.itemId.description,
      quantity: item.quantity,
    }));

    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.use(errorHandler);
module.exports = router;
