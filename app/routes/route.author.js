const router = require('express').Router();
const authorController = require('../controllers/authorController');

router.route('/')
    .get(authorController.index)
    .post(authorController.store);

router.route('/:id')
    .delete(authorController.destroy)
    .put(authorController.update);

module.exports = router;