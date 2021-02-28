const express = require('express');
const { nextTick } = require('process');
const bodyParser = require('body-parser');
const adminRoutes = require('../routes/admin')
const shopRoutes = require('../routes/shop');
const { http } = require('follow-redirects');
const path = require('path')
const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false})) //middleware

app.use('/admin', adminRoutes);


app.use(shopRoutes)

app.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'views', 'shop.html')) // __dirname = project folder
})

app.use((req,res,next) => {
    res.sendFile(path.join(__dirname, '../', 'views', '404.html'))
})

// event driven architecture - node uses heavily

//* http.createServer((req,res) => {
//*     console.log(req);
//* });

//? ^ creates a server, we need to store it in a function
const port = 2002
app.listen(port, ()=>{
    console.log(`listening on ${port}`)
})

// const server = http.createServer(app)

//?  ^  we need to listen - we don't exit our script but keep the code running, listening
//?     for incoming requests

// server.listen(2001);

//!                                Notes

//?              console.log(req.url, req.method, req.headers);


// / GET {
//     host: 'localhost:2001',
//     'upgrade-insecure-requests': '1',
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
//     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15',
//     'accept-language': 'en-us',
//     'accept-encoding': 'gzip, deflate',
//     connection: 'keep-alive'


// process.exit(); // *  hard exit the event loop in Node - obv don't want to do this 😂




