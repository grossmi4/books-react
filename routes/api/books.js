const router = require('express').Router();
const booksController = require('../../controllers/booksControllers');

// /api/books
router
  .route('/')
  .get(booksController.findAll)
  .post(booksController.create);

// /api/books/:id
router
  .route('/:id')
  .get(booksController.findById)
  .post(booksController.update)
  .delete(booksController.remove);

module.exports = router;