var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var favicon = require('serve-favicon');

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/challenges",function(req,res){
  res.sendFile(path + "challenges.html");
});
router.get("/information",function(req,res){
  res.sendFile(path + "information.html");
});
router.get("/highlights",function(req,res){
  res.sendFile(path + "highlights.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});
router.get("/halloffame",function(req,res){
  res.sendFile(path + "halloffame.html");
});

router.get("/clue8",function(req,res){
  res.sendFile(path + "clue8.html");
});
router.get("/clue5",function(req,res){
  res.sendFile(path + "clue5.html");
});

app.use("/",router);
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static('public'))
app.use(express.static('files'))


app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(80,function(){
  console.log("Live at Port 80");
});