const express = require('express');
  const bookController = require('../controllers/book.controller');

  const routers = express.Router();

  routers.get('/', bookController.getAllBooks);
  console.log(bookController.getAllBooks())


  module.exports = routers;