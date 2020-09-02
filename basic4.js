var express= require('express');
const app = express();
var mysql=require('mysql');
const { error } = require('console');

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'userdata'
});

connection.connect(function (er) {
    if (er) throw er;
    console.log("Connected!!!");

    var email="q@q.com";
    var password="root1";

    var insertcmd="INSERT INTO logininfo(email,password) values (?,?)";
    var values=[email,password];

    connection.query(insertcmd,values,function(er,result){
        if (er) throw er;
        console.log("1 entry recorded");
    });
});

var server=app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});