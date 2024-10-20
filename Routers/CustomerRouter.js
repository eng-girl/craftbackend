const express = require('express');
const customerRouter = require('../Controllers/CustomerController');

const router = express.Router();

router.get('/:userId',customerRouter.getCustomerByUserId);
// Fetch customer by ID
router.get('/customer/:customerId', customerRouter.getCustomerById);


module.exports = router;
