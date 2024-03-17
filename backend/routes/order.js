const express = require("express");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const { Admin, Order } = require("../db");
const JWT_SECRET = process.env.JWT_SECRET;
const userMiddleware = require("../middlewares/user");
 
const { Server } = require("socket.io");
const io = require('socket.io')();

// Error handling middleware
const errorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({ error: "Internal Server Error" });
};

// Middleware to verify JWT token and attach user data to request
const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Token not provided" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.username = decoded.username;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};



// Listen for 'newOrder' event from the online ordering system
io.on('connection', (socket) => {
    socket.on('newOrder', (newOrder) => {
        // Emit the same 'newOrder' event to all connected clients in the dashboard
        io.emit('newOrder', newOrder);
    });
    console.log("connected");
});
 

// Create a new order or update existing order with additional items
router.post("/orders",userMiddleware, async (req, res, next) => {
  try {
    const username= req.username 
    const customerId= await Admin.findOne({ username: username }).select("_id");
    // console.log(customerId)
    const { itemIds } = req.body;

    const existingUser = await Admin.findById(customerId);
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    let existingOrder = await Order.findOne({ customerId });

    if (existingOrder) {
      // Check if itemIds is an array or a single ID
      if (Array.isArray(itemIds)) {
        for (const itemId of itemIds) {
          if (!itemId) {
            return res.status(400).json({ error: "Item ID is missing" });
          }

          const existingItemIndex = existingOrder.items.findIndex((item) =>
            item.itemId && item.itemId.equals(itemId)
          );

          if (existingItemIndex !== -1) {
            existingOrder.items[existingItemIndex].quantity += 1;
          } else {
            existingOrder.items.push({ itemId, quantity: 1 });
          }
        }
      } else {
        if (!itemIds) {
          return res.status(400).json({ error: "Item ID is missing" });
        }

        const existingItemIndex = existingOrder.items.findIndex((item) =>
          item.itemId && item.itemId.equals(itemIds)
        );

        if (existingItemIndex !== -1) {
          existingOrder.items[existingItemIndex].quantity += 1;
        } else {
          existingOrder.items.push({ itemId: itemIds, quantity: 1 });
        }
      }

      existingOrder = await existingOrder.save();
      return res.json(existingOrder);
    }

    const order = await Order.create({
      customerId,
      items: Array.isArray(itemIds)
        ? itemIds.map((itemId) => ({ itemId, quantity: 1 }))
        : [{ itemId: itemIds, quantity: 1 }],
    });

    res.json(order);
  } catch (error) {
    next(error);
  }
});


// Update existing order with additional item
router.put("/orders", authenticateUser, async (req, res) => {
  try {
    const { itemId } = req.body;
    const user = await Admin.findOne({ username: req.username });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    let order = await Order.findOne({ customerId: user._id });

    if (!order) {
      order = await Order.create({
        customerId: user._id,
        items: [itemId],
      });
    } else {
      const existingItemIndex = order.items.findIndex((item) =>
        item.itemId.equals(itemId)
      );

      if (existingItemIndex !== -1) {
        order.items[existingItemIndex].quantity += 1;
      } else {
        order.items.push({ itemId, quantity: 1 });
      }

      await order.save();
    }

    res.json(order);
  } catch (error) {
    next(error);
  }
});

// Retrieve all orders
router.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.log(error);
  }
});

// Retrieve a specific order by ID
router.get("/orders/:orderId", async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
});

// Update a specific order by ID
router.put("/orders/:orderId", async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.orderId, req.body, {
      new: true,
    });
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    next(error);
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
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
});

// Delete a specific order by ID
router.delete("/orders/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findByIdAndDelete(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json({ msg: "Order deleted successfully" });
  } catch (error) {
    next(error);
  }
});

// Get the details of the menu items from the order
router.get("/orders/:orderId/items", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    console.log(orderId);
    const order = await Order.findById(orderId).populate({
      path: "items.itemId",
      select: "name description",
    });
    console.log(order);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    
    const items = order.items.map((item) => ({
      name: item.itemId.name,
      description: item.itemId.description,
      quantity: item.quantity,
    }));

    res.json(items);
  } catch (error) {
    // next(error);
    console.log(error);
  }
});

// Error handling middleware
router.use(errorHandler);

module.exports = router;
