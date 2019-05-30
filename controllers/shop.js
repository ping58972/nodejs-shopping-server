
const Product = require('../modles/product');



exports.getProducts = (req, res, next)=>{
    Product.fetchAll(products => {
        res.render('shop/product-list', 
     {prods: products,
      pageTitle: 'All Product', 
      path: '/products'
     });
    });
 }
exports.getProduct = (req, res, next)=>{
   const prodId = req.params.productId;
   Product.findById(prodId, product => {
      res.render('shop/product-detail', {product: product, pageTitle: product.title, path:'/products'});
   });
 }

 exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', 
     {prods: products,
      pageTitle: 'Shop', 
      path: '/'
     });
    });
 }
 exports.getCart = (req, res, next) => {
    res.render('shop/cart', 
     {
      pageTitle: 'Your Cart', 
      path: '/cart'
     });
 }
 exports.postCart = (req, res, next) => {
    const {productId} = req.body;
    console.log(productId);
    res.redirect('/cart');
 }
 exports.getOrders = (req, res, next) => {
    res.render('shop/orders', 
     {
      pageTitle: 'Your Orders', 
      path: '/orders'
     });
 }
 exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', 
     {
      pageTitle: 'Checkout', 
      path: '/chectout'
     });
 }