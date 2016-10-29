var SerialPort = require('serialport');
var jsonfile = require('fs');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var config = require('./config.json');

// Database Connection URL
var url = 'mongodb://localhost:27017/myproject';

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