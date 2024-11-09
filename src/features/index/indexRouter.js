const express = require('express');

const controller = require('./indexController.js');

const router = express.Router();

/* ======================= Routes ======================= */

router.get('/', controller.index);

module.exports = router;
