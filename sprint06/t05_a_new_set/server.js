const http = require('http');
const fs = require('fs')

http.createServer((req, res) => {
    switch (req.url){
        case '/':
            res.writeHead(200, {"Content-Type": 'text/html'})
            fs.createReadStream('index.html').pipe(res)
            break;
        case '/script.js':
            res.writeHead(200, {"Content-Type": 'text/javascript'})
            fs.createReadStream('script.js').pipe(res)
            break;
        case '/views.css':
            res.writeHead(200, {"Content-Type": 'text/css'})
            fs.createReadStream('views.css').pipe(res)
            break;
        default:
            res.writeHead(404, {"Content-Type": 'text/plane'})
            res.end("Error!")
            break;
    }
}).listen(3000, '127.0.0.1', () => console.log("Server on"))