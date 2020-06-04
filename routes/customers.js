var express = require('express');
var router = express.Router();
const customerController = require('../controllers/customer');

/* GET customer listing. */
router.get('/', customerController.getCustomers);

/* Create event */
router.post('/', customerController.createCustomer);

/* GET customer by id. */
router.get('/:id', customerController.getCustomer);

/* UPDATE customer listing. */
router.put('/update/:id', customerController.updateCustomer);

/* DELETE customer listing. */
router.delete('/delete/:id', customerController.deleteCustomer);

module.exports = router;
