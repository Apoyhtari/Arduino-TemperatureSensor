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
});
console.log('Server up and running on http://localhost:3000/');
app.listen(3000);

app.get('/temp', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  MongoClient.connect(config.MONGODB_URL, function(err, db) {
    assert.equal(null, err);
    getDocument(db, function() {
      db.close();
    });
  });
  var getDocument = function(db, callback) {
    db.collection('tempData').find({}, {'temperature': 1, limit: 1}).toArray(function(err, items) {
      var temps = [];
      for (i=0; i < items.length; i++) {
        temps.push(items[i].obj.temperature);
      }
      console.log("found", items);
      res.json(temps);
      callback();
    });
  };
});

app.get('/graphdate', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  MongoClient.connect(config.MONGODB_URL, function(err, db) {
    assert.equal(null, err);
    getDocument(db, function() {
      db.close();
    });
  });
  var getDocument = function(db, callback) {
    db.collection('tempData').find({}, {'temperature': 1, limit: 6}).toArray(function(err, items) {
      var temps = [];
      for (i=0; i < items.length; i++) {
        temps.push(items[i].obj.date);
      }

      res.json(temps);
      callback();
    });
  };

});
app.get('/graphdata', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  MongoClient.connect(config.MONGODB_URL, function(err, db) {
    assert.equal(null, err);
    getDocument(db, function() {
      db.close();
    });
  });
  var getDocument = function(db, callback) {
    db.collection('tempData').find({}, {'temperature': 1, limit: 6}).toArray(function(err, items) {
      var temps = [];
      for (i=0; i < items.length; i++) {
        temps.push(items[i].obj.temperature);
      }

      res.json(temps);
      callback();
    });
  };

});

app.get('/outside', function(req, res) {
  res.setHeader("Content-Type", "application/json");
    res.send(temp);
});
// Database Connection URL
var url = 'mongodb://localhost:27017/myproject';
var temp;

var object = {};
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
  console.log("data received");
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
     console.log("inserted", obj);
    callback();
  });
};
