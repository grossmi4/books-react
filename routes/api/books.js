const router = require('express').Router();
const booksController = require('../../controllers/googleBooksController');

// /api/books
router
  .route('/')
  .get(booksController.findAll)
  .post(booksController.create);

// /api/books/:id
router
  .route('/:id')
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;