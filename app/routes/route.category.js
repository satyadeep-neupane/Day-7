const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

router.route('/')
    .get(categoryController.index)
    .post(categoryController.store);

router.route('/:id')
    .delete(categoryController.destroy)
    .put(categoryController.update);

module.exports = router;