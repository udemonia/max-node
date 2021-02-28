
//? syntax errors; typos, missing/added characters

//? Run time errors - try to execute code that breaks when ran

//? Logical Errors - never see an error, just doesn't do what it should


const helmet = require("helmet");
const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const app = express();


//path for PWD
const publicDirectoryPath = path.join(__dirname,'../public')

//*-------------------------------------------------------------
//?                    Express Middleware
//*-------------------------------------------------------------

// logging
app.use(morgan('tiny'))

//secure headers
app.use(helmet());

// parse incoming json - content-type application/json
app.use(express.json())

// url encoded parsing - w/ extended false option
app.use(express.urlencoded({extended:false}))

//*-------------------------------------------------------------
//?                    Express Routes
//*-------------------------------------------------------------

app.get('/', (req,res) => {
    res.send({
        test: "🧙‍♀️💫 - Hello World - 💫🧙‍♀️"
    })
})

//*-------------------------------------------------------------
//?                    Express Ports
//*-------------------------------------------------------------


port = 1234

app.listen(port, ()=>{
    console.log("Listening on ", port)
})

