require('dotenv').config();
require('module-alias/register');

const express = require('express');
const logger = require('morgan');

const mongoConnect = require('@Database/mongo-connect.js');
const index = require('@Features/index/index.js');
const message = require('@Features/message/index.js');

const app = express();
const port = process.env.PORT || 3000;

/* ======================= Database ======================= */

const mongoUrl =
  process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/StudioYosepRA';

mongoConnect(mongoUrl);

/* ======================= Middlxewares ======================= */

app.use(logger('dev'));

/* ======================= Routes ======================= */

app.use('/', index.router);
app.use('/message', message.router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port} ...`);
});
