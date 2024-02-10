const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://jainamb:jainamBagrecha@cluster0.h5mn9fs.mongodb.net/canteen-management-system"
);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["customer", "staff", "admin"],
    default: "staff",
  },
  name: String,
  email: String,

  createdAt: { type: Date, default: Date.now },
});


const orderItemSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
  quantity: { type: Number, default: 1 }
}); 

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  status: { type: String, enum: ['pending', 'preparing', 'ready', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const Order= mongoose.model('Order', orderSchema);

const User = mongoose.model('User', userSchema);
module.exports = {
  User,
  Order
};
