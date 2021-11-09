const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    console.log(req.url);
    if (req.url === "/") {
        res.writeHead(200,{"Content-Type": 'text/html'});
        fs.readFile('index.html', function(err,data){
            if (err) throw err;
            res.end(data);
        })
    }else if(req.url ==="/kontakt"){
        res.writeHead(200,{"Content-Type": 'text/html'});
        fs.readFile('kontakt.html', function(err,data){
            if (err) throw err;
            res.end(data);
        })
    }if (req.url ==="/main.css") {
        res.writeHead(200,{"Content-Type": 'text/css'});
        fs.readFile('main.css', function(err,data){
            if (err) throw err;
            res.end(data);
        })
    }    
})

server.listen(3000, ()=>{
    console.log('Listening to port 3000');
})