const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error');
const routes = require('./routes/router');

const app = express();

app.use(express.json());

app.use('/books', routes);

app.use(errorMiddleware);

module.exports = app;