const http= require('http');

console.log("Running on  http:localhost:3000")
http.createServer(function(req,res){
    res.write("Hello World");
    res.end();
}).listen(3000);