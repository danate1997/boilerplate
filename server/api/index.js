const express = require('express');
const router = express.Router();

router.use("/girlfriend", require("./girlfriend"))

module.exports = router;