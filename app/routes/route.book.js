const router = require('express').Router();
const bookController = require('../controllers/bookController');

router.route('/')
    .get(bookController.index)
    .post(bookController.store);

router.route('/:id')
    .delete(bookController.destroy)
    .put(bookController.update);

module.exports = router;