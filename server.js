var express = require('express');
var path = require('path');
var app = express();


app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/app.js', function(req,res){
	res.sendFile(path.join(__dirname + '/app.js'));
	console.log('called app.js');
});

app.get('/pages/main.html', function(req,res){
	res.sendFile(path.join(__dirname + '/pages/main.html'));
	console.log('called main.html');
});

app.get('/pages/second.html', function(req,res){
	res.sendFile(path.join(__dirname + '/pages/second.html'));
	console.log('called second.html');
});

app.get('/directives/searchresult.html', function(req,res){
	res.sendFile(path.join(__dirname + '/directives/searchresult.html'));
	console.log('called directives/search');
});

app.listen(3000, function(){
	console.log("listening on port 3000 for lesson 37");
});