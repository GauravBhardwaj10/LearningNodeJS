var express=require('express');
const app= express;

app.get('/',function(req,res){
    res.write("Index")
});
app.get('/p1',function(req,res){
    res.write("<h1>Page 1</h1>")
});

var server=app.listen(3000,function(){
    var host=server.address().address;
    var port= server.address.port;
    console.log("Server run at http//: localhost:%s",port);
});