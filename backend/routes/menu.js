const express = require("express");
const { Router } = require("express");
const router = Router();
const { Menu,Order } = require("../db");
// const userMiddleware = require("../middlewares/user");

// router.post("/add-items", async (req, res) => {
//   try {
//     const items = req.body; // Assuming req.body is an array of items

//     // Validate that req.body is an array
//     if (!Array.isArray(items)) {
//       return res.status(400).json({ message: "Items should be provided as an array" });
//     }

//     // Insert each item into the database
//     const newItems = await Menu.insertMany(items);

//     res.json(newItems);
//   } catch (error) {
//     console.error("Error adding menu items:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

router.post("/add-items", async (req, res) => {
  try {
    const { name, description, image, category, salePrice } = req.body;

    // Create a new product
    const newProduct = await Menu.create({
      name,
      description,
      image,
      category,
      salePrice
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error adding product:", error);
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


// // GET endpoint to fetch orders with menu item names
router.get('/itemnames', async (req, res) => {
  try {
    // Retrieve orders with populated menu items
    const orders = await Order.find()
      .populate({
        path: 'items.itemId', // Populate the 'items' array with the 'itemId' field referencing the MenuItem model
        select: 'name price', // Select only the 'name' and 'price' fields from the MenuItem model
        model: Menu // Specify the Menu model/schema
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
          name: item.itemId ? item.itemId.name : 'Unknown', // Check if itemId exists before accessing its properties
          price: item.itemId ? item.itemId.price : 0, // Provide default values if itemId is null
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


// Endpoint to fetch details of items from order IDs
// router.get('/item-details', async (req, res) => {
//   try {
//     // Retrieve all orders from the Order collection
//     const orders = await Order.find().exec();

//     // Extract unique item IDs from all orders
//     const itemIds = orders.reduce((accumulator, order) => {
//       order.items.forEach(item => accumulator.add(item.itemId));
//       return accumulator;
//     }, new Set());

//     // Fetch item details from the Menu collection using item IDs
//     const items = await Menu.find({ _id: { $in: Array.from(itemIds) } }).exec();

//     // Format item details as an object with IDs as keys
//     const itemDetails = items.reduce((accumulator, item) => {
//       accumulator[item._id] = {
//         name: item.name,
//         price: item.price
//       };
//       return accumulator;
//     }, {});

//     res.json(itemDetails);
//   } catch (error) {
//     console.error('Error fetching item details:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


module.exports = router;
