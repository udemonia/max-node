const http = require('http');
const fs = require('fs');


const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<h1>My First Page</h1>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>');
        return res.end(); // add return in the if so we quite the function
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk);
            console.log(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); // incoming data will be text
            console.log(parsedBody)
            const message = parsedBody.split('=')[1]
            console.log(`Message is: ${message}`)
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>My First Page</h1>')
    res.write('</html>');
    res.end(); 
    console.log(req.url, req.method, req.headers);
}


module.exports = {
    handler: requestHandler
};


