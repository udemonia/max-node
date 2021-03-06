const fs = require('fs')
const path = require('path')
const p = path.join(__dirname, 
    '..', 
    'data', 
    'products.json')

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([])
        }
        cb(JSON.parse(fileContent))  // JSON.parse to return array and not text
    })
}        

module.exports = class Product {
    constructor(title, imageURL, description, price) {
        this.title = title;
        this.imageURL = imageURL,
        this.description = description,
        this.price = price
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
        // static allows fetch to be called on the object itself - 
        // so we don't have to create a new class just to call method
    }
}