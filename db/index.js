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

const User = mongoose.model('User', userSchema);
module.exports = {
  User
};
