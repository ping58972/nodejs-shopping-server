const express = require('express');
//const path = require('path');
const router = express.Router();
//const rootDir = require('../util/path');

const adminController = require('../controllers/admin');



// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct );

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;