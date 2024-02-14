const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const orderRouter = require("./routes/order")
const userRouter = require("./routes/user");
const   JWT_SECRET   = process.env.JWT_SECRET

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/order", orderRouter)
app.use("/user", userRouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 