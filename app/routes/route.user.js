const router = require('express').Router();
const userController = require('../controllers/userController');
const verifyOldPassword = require('../middleware/verifyOldPassword');

router.route('/')
    .get(userController.index)
    .post(userController.store);

router.route('/:id')
    .get(userController.show)
    .put(verifyOldPassword, userController.update)
    .delete(userController.destroy);


module.exports = router;