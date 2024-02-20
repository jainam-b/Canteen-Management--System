const express = require("express");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const { User } = require("../db");
const   JWT_SECRET   = process.env.JWT_SECRET
const userMiddleware = require("../middlewares/user");
const { createAdmin, loginAdmin } = require("../zod/type");

router.post("/signup", (req, res) => {
  
  try {
    // Parse and validate request body against Zod schema
    const userData = createAdmin.safeParse(req.body);
     
    // Create user if validation succeeds
    const user = User.create({
       username:userData.data.username,
       password:userData.data.password,
       role:userData.data.role,
       name:userData.data.name,
       email:userData.data.email

    });
    if(userData.success){
      res.json({
        msg: "Account Created!!",
      });
    }
   
  } catch (error) { 
    // Handle validation errors
    res.status(400).json({
      error: "Validation Error",
       
    });
  }
});
 
router.post("/signin", async (req, res) => {
  try {
    const userData = loginAdmin.safeParse(req.body);
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      // User not found
      return res.status(401).json({ msg: "Invalid username or password" });
    }

    const isPasswordValid = password === user.password;

    if (isPasswordValid) {
      const token = jwt.sign({ username }, JWT_SECRET);
      res.json({ token });
    } else {
      res.status(401).json({ msg: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({
      msg: "Error occurred while signing in",
      error: error.message,
    });
  }
});
router.get("/users", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;

