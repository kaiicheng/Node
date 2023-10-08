var express=require("express");
var app=express();  // create a Express Application object

// response to root directory
app.get("/", function(req, res){
    res.send("Hello Express!");
});

// response to /mypath path
app.get("/mypath", function(req, res){
    res.send("This is my path.");
});


app.listen(3000, function(){
    console.log("Server successfully working on http://localhost:3000/");
});