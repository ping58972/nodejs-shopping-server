const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (req, res, next)=>{
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {docTitle: 'add-product', path: '/admin/add-product'});
});

router.post('/add-product', (req, res, next)=>{
    products.push({title: req.body.title});
    res.redirect('/');
})

module.exports.router = router;
module.exports.products = products;