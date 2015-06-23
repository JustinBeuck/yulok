var bodyparser = require('body-parser');
var express = require("express");
var app     = express();
var path    = require("path");
var Firebase = require("firebase");

var ref = new Firebase("https://yulok.firebaseio.com/");

app.use(bodyparser());

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

app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
   res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
   next();
});

app.post('/collectdata', function(req, res) {
  var usersRef = ref.child("users");
  usersRef.set({
  fullname: req.body.fullName
});
  res.send(200);
});



app.use("/css", express.static(__dirname + '/css'));

app.use("/js", express.static(__dirname + '/js'));

app.listen(process.env.PORT || 3000, function(){
  console.log('listening....');
});