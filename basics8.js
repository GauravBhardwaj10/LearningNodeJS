const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var mysql=require('mysql');
var connection = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:'product_pro'
});

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});
app.post("/insert", (req, res) => {
var bodydata=req.body;

 console.log(bodydata);
  var FirstName=bodydata.firstname;
    var LastName=bodydata.lastname;
    var Email=bodydata.email;
    var Password=bodydata.password;

    var insertcmd="INSERT INTO pro_user(first_name,last_name,email,password,user_type) values (?,?,?,?,?)";
    var values=[FirstName,LastName,Email,Password,"1"];

    connection.query(insertcmd,values,function(er,result){
        if (er) throw er;
        console.log("1 entry recorded");
    }); res.json({ message: "user registered." });
});

app.get("/fetchproduct", (req, res) => {

 
  
    var insertcmd="select * from pro_product";
    

    connection.query(insertcmd,function(er,result){
        if (er) throw er;
        console.log("fetch data");
        res.json({ message: result });
    }); 
});

app.get("/fetchuser", (req, res) => {

 
  
  var insertcmd="select * from pro_user";
  

  connection.query(insertcmd,function(er,result){
      if (er) throw er;
      console.log("fetch data");
      res.json({ message: result });
  }); 
});



app.post("/login", (req, res) => {

  var bodydata=req.body;
    var Email=bodydata.email;
    var Password=bodydata.password;

    var insertcmd="select * From pro_user where email=? AND password = ?";
    var values=[Email,Password];

    connection.query(insertcmd,values,function(er,result){
        if (er) throw er;
        console.log("you are logged in"+ result);
        res.json({ message: "user  logged in .",data: result });
    }); 
  });

  app.post("/insertproduct", (req, res) => {

    var bodydata=req.body;

    console.log(bodydata);
    
    var name=bodydata.name;
      var description=bodydata.description;
      var price=bodydata.price;
  
  
      var insertcmd="INSERT INTO pro_product(	name,description,	price) values (?,?,?)";
      var values=[name ,description,price];
  
      connection.query(insertcmd,values,function(er,result){
          if (er) throw er;
          console.log("1 entry recorded");
      }); res.json({ message: "product entered." });
  });

require("./app/routes/user.routes.js")(app);

// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

