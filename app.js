var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/views/contact.html'));
});

app.get('/schedule',function(req,res){
  res.sendFile(path.join(__dirname+'/views/schedule.html'));
});

app.get('/signup',function(req,res){
  res.sendFile(path.join(__dirname+'/views/signup.html'));
});

app.use("/css", express.static(__dirname + '/css'));

app.use("/js", express.static(__dirname + '/js'));

app.listen(3000);

console.log("Running at Port 3000");