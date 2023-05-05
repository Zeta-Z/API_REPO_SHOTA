const router = require('express').Router();

const userController = require('./api/user');


router.use('/user', userController);

module.exports = router;