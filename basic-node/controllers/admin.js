
const Product = require('../models/product');
// product class constructor

exports.getAddProducts = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  exports.postAddProduct = (req, res, next) => {
    // create a new product instance from the Product view print
    const product = new Product(req.body.title)
    product.save();
    res.redirect('/');
  }

  exports.getProducts = (req, res, next) => {
    res.render('admin/products', {
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }