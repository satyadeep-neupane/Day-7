const router = require('express').Router();
const roleController = require('../controllers/roleController');

router.route('/')
    .get(roleController.index)
    .post(roleController.store);

router.route('/:id')
    .delete(roleController.destroy)
    .put(roleController.update);

module.exports = router;