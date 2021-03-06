
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
    const title = req.body.title;
    const imageURL = req.body.imageURL;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title,imageURL,description,price)
    product.save();
    res.redirect('/');
  }

  exports.getProducts = (req, res, next) => {
    res.render('admin/products', {
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }

