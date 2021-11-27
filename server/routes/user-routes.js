const express = require('express');

const userController = require('../controllers/user-controller');

const router = express.Router();

router.get('/:uid', userController.getUserById);
router.get('/name/:uname', userController.getUserByName);
router.post('/', userController.createUser);

module.exports = router;
