const express = require('express')
const router = express.Router();

const registerRouter = require('./register.router');

router.use("/register", registerRouter);

module.exports = router;