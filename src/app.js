require('./db/mongoose');
const express = require('express');

const app = express();

const allowedCrossDomain = require('./middleware/domain');

app.use(express.json());
app.use(allowedCrossDomain);

module.exports = app;