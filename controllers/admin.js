const Product = require('../modles/product');

exports.getAddProduct = (req, res, next)=>{
    res.render('admin/add-product', {pageTitle: 'add-product', path: '/admin/add-product', 
                                formCSS:true, productCSS: true, activeAddProduct: true
                                });
                            }

exports.postAddProduct = (req, res, next)=>{
    //console.log(req.body);
    const {title, imageUrl, price, description} = req.body;
    const product = new Product(title, imageUrl, description, price );
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/products', 
     {prods: products,
      pageTitle: 'Admin Product', 
      path: '/admin/products'
     });
    });
}