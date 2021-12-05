const http = require('http');

const server = http.createServer((req,res)=> {
    if(req.url === '/') {
        res.write('TEST');
        res.end();
    }

    if(req.url === '/item/') {
        res.write(JSON.stringify['0'])
        res.end();
    }
})

server.listen(3000);

console.log('Listening on .');