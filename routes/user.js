const express = require("express");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const router = Router();
const { User } = require("../db");
const { JWT_SECRET } = require("../config");
const userMiddleware = require("../middlewares/user");

router.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role;
  const name = req.body.name;
  const email = req.body.email;

  const user = User.create({
    username,
    password,
    role,
    name,
    email,
  });

  res.json({
    msg: "Account Created!! ",
  });
});

// router.post("/signin", async (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   const user = await User.findOne({
//     username,
//     password,
//   });
//   try {

//   if (user) {
//     const token = jwt.sign(
//       {
//         username,
//       },
//       JWT_SECRET
//     );
//     res.json({
//       token,
//     });
//   } else {
//     res.status(403).json({
//       msg: "User Created Successfully!",
//     });
//   }
// } catch (error) {
//     res.status(404).json({
//         msg:"Error occured"+error
//     })

// }
// });
router.post("/signin", async (req, res) => {
  try {
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
module.exports = router;
