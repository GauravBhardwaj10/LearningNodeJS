var express=require('express');
const app =express();

var mysql=require('mysql');
var bodyparser = require('body-parser');


var connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'userdata'
});
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.post('/register/',(req,res,next)=>{
    var data =req.body;
    var password=data.password;
    var email=data.email;
    var user = data.user;
    var phonenumber = data.phonenumber;
    var DOB = data.DOB;
    console.log(email+""+password);
    connection.query("SELECT *FROM login_info WHERE email=?",[email],function(err,result,fields){
        connection.on('error',(err)=>{
            console.log("[MYSQL ERROR]",err);

        });
    });
});
