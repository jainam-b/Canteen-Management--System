const express = require("express");
const { Router } = require("express");
const router = Router();
const { Order } = require("../db");
const userMiddleware = require("../middlewares/user");

router.get("/:status", async (req, res) => {
    try {
        const status=req.params.status
           // console.log(status);
        const pendingOrders = await Order.find({ status: status });
        res.json(pendingOrders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.get('/filter/:status', async (req, res) => {
    try {
        const status=req.params.status
      // Retrieve orders with populated menu items
      const orders = await Order.find({ status: status })
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
