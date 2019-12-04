const express = require("express");
const router = express.Router();
const driver = require("../models/drivers");

router.get("/", (req,res) => {
    res.send("wenas");
})

module.exports = router;