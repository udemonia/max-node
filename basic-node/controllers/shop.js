
// dedicated to product controller logic

const Product = require('../models/product');

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
      const products = Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/product'
          });
      }) // static method; called without creating an instance of a class
  }

exports.getIndex = (req, res) => {
  const products = Product.fetchAll((products) => {
    res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
  }) 
}

exports.getCart = (req,res) => {
  res.render('shop/cart', {
    pageTitle: 'Cart',
    path: '/cart'
  });
}

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        prods: products,
        pageTitle: 'Checkout',
        path: '/checkout'
      });
}