var express= require('express');
const app = express();
var mysql=require('mysql');

var bodyparser=require('body-parser');
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'userdata'
});
app.use(bodyparser.json)
app.use(bodyparser.urlencoded({extended:true}));

app.post('/register/',(req,res,next)=>{

    var data =req.body;
    var password=data.password;
    var email=data.email;

    connection.query("Select * from logininfo WHERE email=?" ,[email],function(err,result,feilds){
        connection.on('error',(err)=>{
            console.log("[MySQL Error]",err);
        });
        if (result && result.length){
            res.json("User already exists");
        }        
        else{
            var insert_cmd="INSERT INTO logininfo(email,password) values=(?,?)";
            values=[email,password];

            console.log("executing "+insert_cmd);
            connection.query(insert_cmd,values,(err,result,feilds)=>{
                connection.on('err',(err)=>{
                    console.log('[MySQL ERROR',err);
                });
                res.json("Registered");
                console.log("Registration Successful");
            });
        }
    });
});

var server=app.listen(3000,()=>{
    console.log("Server Running at http:localhost:3000");
});