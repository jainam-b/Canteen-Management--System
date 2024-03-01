const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const orderRouter = require("./routes/order")
const userRouter = require("./routes/user");
const filterRouter = require("./routes/filter");
const menuRouter = require("./routes/menu");
const   JWT_SECRET   = process.env.JWT_SECRET
const cors=require("cors")
app.use(express.json())
app.use(cors())

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/order", orderRouter)
app.use("/user", userRouter)
app.use("/status", filterRouter)
app.use("/menu", menuRouter)

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 