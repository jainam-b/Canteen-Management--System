const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect(
  process.env.DB_URL
);
 
// Admin schema {admin to login }
const adminSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String},
  role: {
    type: String,
    enum: ["customer", "staff", "admin"],
    default: "staff",
  },
 
  email: String,

  createdAt: { type: Date, default: Date.now },
});

// storing  itemId from menu table and quantity
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who placed the order
  items: [{
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true }, // Reference to the menu item
    quantity: { type: Number, required: true } // Quantity of the menu item
  }],
  totalPrice: { type: Number, required: true }, // Total price of the order
  status: {
    type: String,
    enum: ["pending", "preparing", "ready", "completed"],
    default: "pending",
  },
  createdAt: { type: Date, default: Date.now } // Timestamp of when the order was created
});


// menu items 
const menuItemSchema = new mongoose.Schema({
  name: { type: String,   },
  description: String,
  price: { type: Number,  },
  category: { type: String, enum: ['appetizer', 'main course', 'dessert']},
  available: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  image: {String}, // Assuming you're storing the URL of the image
});




// customers
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const Menu= mongoose.model('MenuItem', menuItemSchema);
const Order = mongoose.model("Order", orderSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Users = mongoose.model("Users", userSchema);
 


module.exports = {
  Admin,
  Order,
  Menu,
  Users
  
};
