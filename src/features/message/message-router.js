const express = require('express');

const controller = require('./message-controller.js');

const router = express.Router();

/* ======================= Routes ======================= */

router.get('/', controller.index);

module.exports = router;
