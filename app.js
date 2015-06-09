var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/contact.html'));
});

app.get('/schedule',function(req,res){
  res.sendFile(path.join(__dirname+'/schedule.html'));
});

app.get('/signup',function(req,res){
  res.sendFile(path.join(__dirname+'/signup.html'));
});

app.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

app.use("/css", express.static(__dirname + '/css'));

app.use("/js", express.static(__dirname + '/js'));

app.listen(3000);

console.log("Running at Port 3000");