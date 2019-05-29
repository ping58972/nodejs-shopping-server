
const Product = require('../modles/product');

exports.getAddProduct = (req, res, next)=>{
    res.render('add-product', {docTitle: 'add-product', path: '/admin/add-product', 
                                formCSS:true, productCSS: true, activeAddProduct: true
                                });
                            }

exports.postAddProduct = (req, res, next)=>{
    //products.push({title: req.body.title});
    const product = new Product({title: req.body.title});
    product.save();
    res.redirect('/');
}

exports.getShop = (req, res, next)=>{
    const products = Product.fetchAll();
     res.render('shop', 
     {prods: products,
      docTitle: 'Shop', 
      path: '/', 
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
     });
 }