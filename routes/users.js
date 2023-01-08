var express = require('express');
const {  register, login } = require('../controllers/userController');
var router = express.Router();

router.post('/', register);
router.post('/login', login);

module.exports = router;