const http = require('http');
const fs = require('fs')

http.createServer((req, res) => {
    switch (req.url){
        case '/normal-router.js':
            res.writeHead(200, {"Content-Type": 'text/javascript'})
            fs.createReadStream('normal-router.js').pipe(res)
            break;
        case '/quantum-router.js':
            res.writeHead(200, {"Content-Type": 'text/javascript'})
            fs.createReadStream('quantum-router.js').pipe(res)
            break;
        default:
            res.writeHead(404, {"Content-Type": 'text/plane'})
            res.end("Error!")
            break;
    }
}).listen(3000, '127.0.0.1', () => console.log("Server on"))