var express= require('express');
const app = express();
var mysql=require('mysql');
const { error } = require('console');

var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'eshop'
});

connection.connect(function (er) {
    if (er) throw er;
    console.log("Connected!!!");

    var FirstName="Gaurav";
    var LastName="Bhardwaj";
    var Email="gaurav@gmail.com";
    var Password="gaurav123";

    var insertcmd="INSERT INTO createaccount(FirstName,LastName,Email,Password) values (?,?,?,?)";
    var values=[FirstName,LastName,Email,Password];

    connection.query(insertcmd,values,function(er,result){
        if (er) throw er;
        console.log("1 entry recorded");
    });
});

var server=app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000");
});