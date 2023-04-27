const bookService = require('../services/book.service');

const getAllBooks = async (_req, res) => {
    const books = await bookService.getAllBooks();
  
    return res.status(200).json(books);
  };

  module.exports = {
    getAllBooks
  };
