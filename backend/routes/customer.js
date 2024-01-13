var express = require('express');
var router = express.Router();
const customerController = require('../controller/CustomerController');

// add
router.post('/add', customerController.addCustomer);

// get one
router.get('/find/:id', customerController.findCustomer);

// get all 
router.get('/all', customerController.allCustomers);

// update
router.put('/update/:id', customerController.updateCustomer);

// delete
router.delete('/delete/:id', customerController.deleteCustomer);

module.exports = router;