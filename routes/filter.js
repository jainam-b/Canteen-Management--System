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

module.exports = router 
