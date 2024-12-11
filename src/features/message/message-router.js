const express = require('express');

const controller = require('./message-controller.js');

const router = express.Router();

/* ======================= Middlewares ======================= */

router.use(express.json());

/* ======================= Routes ======================= */

router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', controller.create);

router.delete('/:id', controller.delete);

router.put('/:id', controller.changeReadStatus);

module.exports = router;
