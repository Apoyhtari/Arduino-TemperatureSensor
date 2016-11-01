var SerialPort = require('serialport');
var jsonfile = require('fs');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var express = require('express');
var app = express();
var path = require('path');
var __projectRoot = __dirname + '/';
var config = require('./config.json');

app.use(express.static(__projectRoot));
app.get('/', function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.send(temp);
    res.sendFile(path.join(__projectRoot + '/index.html'));
});
console.log('Server up and running on http://localhost:3000/');
app.listen(3000);

app.get('/temp', function(req, res) {
  res.json(temp);
});

app.get('/graphs', function(req, res) {
  res.json({message: 'under construction'});
});

app.get('/outside', function(req, res) {
  res.setHeader("Content-Type", "application/json");
    res.send(temp);
    res.sendFile(path.join(__projectRoot + '/index.html'));
});
// Database Connection URL
var url = 'mongodb://localhost:27017/myproject';
var temp;

var obj = {};
var port = new SerialPort(config.PORT, {baudrate: config.BAUDRATE, parser:SerialPort.parsers.readline("\r\n")});
var file = './data/data.json';

 port.on('open', onOpen);
 port.on('data', onData);
 port.on('close', onClosed);

function onClosed() {
	console.log("closed");
}
function onOpen() {
 	console.log("opened");
}

function onData(data) {
 	var timeStamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
 	obj = {
 		temperature: data,
 		date: timeStamp
 	}
  temp = data;
 	MongoClient.connect(config.MONGODB_URL, function(err, db) {
  		assert.equal(null, err);
  		insertDocument(db, function() {
  			db.close();
  		});
	});
}


var insertDocument = function(db, callback) {
   db.collection('tempData').insertOne( {obj}, function(err, result) {
    assert.equal(err, null);
    callback();
  });
};