// require('dotenv').config();
require('module-alias/register');

const express = require('express');
const logger = require('morgan');

const indexFeature = require('@Features/index/index.js');

const app = express();
const port = process.env.PORT || 3000;

/* ======================= Middlewares ======================= */

app.use(logger('dev'));

/* ======================= Routes ======================= */

app.use('/', indexFeature.router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port} ...`);
});
