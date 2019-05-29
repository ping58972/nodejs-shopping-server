const express = require('express');
const path = require('path');
const router = express.Router();
const productController = require('../controllers/products');
const rootDir = require('../util/path');

const adminData = require('./admin');

router.get('/', productController.getShop);

module.exports = router;