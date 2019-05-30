const Product = require('../modles/product');

exports.getAddProduct = (req, res, next)=>{
    res.render('admin/add-product', {docTitle: 'add-product', path: '/admin/add-product', 
                                formCSS:true, productCSS: true, activeAddProduct: true
                                });
                            }

exports.postAddProduct = (req, res, next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', 
     {prods: products,
      docTitle: 'Admin Product', 
      path: '/admin/products'
     });
    });
}