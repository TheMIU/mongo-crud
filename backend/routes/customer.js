var express = require('express');
var router = express.Router();
const customerController = require('../controller/CustomerController');

// add
router.post('/add', customerController.addCustomer);

// get one
router.get('/find/:id', customerController.findCustomer);

module.exports = router;