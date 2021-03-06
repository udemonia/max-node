const path = require('path');
const express = require('express');
// read in the controller 
const shopController = require('../controllers/shop')

const router = express.Router();
router.get('/', shopController.getIndex);

//todo router.get('/product') //

router.get('/products', shopController.getAddProducts)

router.get('/cart', shopController.getCart)

router.get('/checkout', shopController.getCheckout)

module.exports = router;
