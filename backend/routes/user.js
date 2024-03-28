 
const express = require("express");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const { Admin, Users } = require("../db");
const JWT_SECRET = process.env.JWT_SECRET;
const userMiddleware = require("../middlewares/user");
const { signupSchema, loginAdmin } = require("../zod/type");

// router.post("/signup", (req, res) => {
//   try {
//     // Parse and validate request body against Zod schema
//     const userData = createAdmin.safeParse(req.body);

//     // Create user if validation succeeds
//     const user = Admin.create({
//       username: userData.data.username,
//       password: userData.data.password,
//       role: userData.data.role,
//       name: userData.data.name,
//       email: userData.data.email,
//     });
//     if (userData.success) {
//       res.json({
//         msg: "Account Created!!",
//       });
//     }
//   } catch (error) {
//     // Handle validation errors
//     res.status(400).json({
//       error: "Validation Error",
//     });
//   }
// });


// Define the signup route
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = signupSchema.parse(req.body);

    // Create user
    const newUser = await Admin.create({
      username,
      email,
      password,
    });

    // Return success response
    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    // Handle errors
    console.error("Error in user signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    // const userData = loginUser.safeParse(req.body);
    const { email, password } = req.body;

    const user = await Admin.findOne({ email });

    if (!user) {
      // User not found
      return res.status(401).json({ msg: "Invalid email or password" });
    }

    const isPasswordValid = password === user.password;

    if (isPasswordValid) {
      const token = jwt.sign({ email }, JWT_SECRET);

      // Set the token in the response header
      res.setHeader("Authorization", `Bearer ${token}`);

      // Send token in the response body
      res.json({ token });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
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
    const user = await Admin.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// calculate total users
router.get("/count", async (req, res) => {
  try {
    const count = await Users.countDocuments();
    res.json({ count: count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;