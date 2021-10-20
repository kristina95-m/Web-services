var express = require('express');
var router = express.Router();
const users = require('../controllers/users');

/* GET users listing. */
router
    .post('/', users.registerUser)
    .post('/', users.logInUser);

module.exports = router;
