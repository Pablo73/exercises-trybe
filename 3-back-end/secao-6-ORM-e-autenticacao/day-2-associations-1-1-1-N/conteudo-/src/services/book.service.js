const { Book } = require('../models');

const getAllBooks = async () => Book.findAll();
console.log(getAllBooks)

module.exports = {
    getAllBooks
  };