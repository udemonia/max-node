const path = require('path');
const chalk = require('chalk');
const morgan = require('morgan')
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error')

const app = express();

app.use(morgan('tiny'));

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const port = 2002
app.listen(port, ()=>{
    console.log(chalk.green.inverse.bold` ⚡️ Listening on ${port} `)
})