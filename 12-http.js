const http = require('http');

// req är inkommande förfrågan från klient/browser
// res är vad servern sänder tillbaka
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
     else if(req.url === '/about') {
        res.end('Here is our short history')
    }
    else {
        res.end(`
            <h1>Ooops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
            `)
    }
    
})


// porten servern lyssnar till
server.listen(5000)