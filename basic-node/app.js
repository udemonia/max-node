const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const morgan = require('morgan');

//read in two sequelize models - objects and relate them
const Product = require('./models/product');
const User = require('./models/users');
const app = express();
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order')
const OrderItem = require('./models/order-item')

// get user info
app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('tiny'))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// create a relation - products belong to users
// pass a second option, on delete cascade 
// [delete a user, products associated with them would also be gone]

Product.belongsTo(User, {
  constraints:true, // constraints - if a user is deleted; products related are deleted
  onDelete: 'CASCADE'
});

User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User)
Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(User, { through: OrderItem })

//? sync = true - drop existing and overwrite with our data - don't use in
sequelize
  .sync()
  // .sync({
  //   force: true
  // })
  .then(result => {
    return User.findByPk(1);
    // console.log(result);

  })
  .then((user) => {
    if (!user) {
      return User.create({
        name: "Brandon",
        email: "brandon.l.lambert@gmail.com"
      })
    }
    return Promise.resolve(user);
    // we always want to return the same thing - User.create returns a promise
    // technically a .then() will return a promise anyways but being explicit is okay
  })
  .then(user => {
    return user.createCart();

  }).then((cart) => {
    port = 1234
    app.listen(port, ()=>{
    console.log("Listening on ", port)
  })
  })
  .catch(err => {
    console.log(err);
  });













