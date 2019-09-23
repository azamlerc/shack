// Shack API
// Andrew Zamler-Carhart

// To run the server:
// HOSTNAME=localhost PORT=1234 node shack.js

var shack = this;
var express = require("express"),
	MongoClient = require('mongodb').MongoClient,
	mongoose = require('mongoose'),
	ObjectId = require('mongodb').ObjectID,
	assert = require('assert'),
	shackdb = require("./shackdb"),
	app = express(),
	bodyParser = require('body-parser'),
	errorHandler = require('errorhandler'),
	methodOverride = require('method-override'),
	model = require('./model.json'),
	arp = require('node-arp'),
	hostname = process.env.HOSTNAME || 'localhost',
	port = parseInt(process.env.PORT, 10) || 1234,
	publicDir = process.argv[2] || __dirname + '/public',
	d = new Date(),
  options = []
	
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
	dumpExceptions: true,
	showStack: true
}));

// MENUITEMS

app.get('/test', function (req, res) {
  res.json({cool: "oh yeah"});
});

app.get('/menu', function (req, res) {
	shackdb.Menu.find(function (err, list) {
	    if (err) return res.send(err);
	    res.json(list);
	});
});

app.post('/menu', function (req, res) {
	var menu = req.body;
	menu.created = new Date();
	menu.modifed = new Date();
	shackdb.Menu.create(req.body, function (err, post) {
		if (err) return res.send(err);
		res.json(post);
	});
});

app.get('/menu/:menu_id', function (req, res) {
	shackdb.Menu.findById(req.params.menu_id, function (err, post) {
		if (err) return res.send(err);
		res.json(post);
	});
});

app.put('/menu/:menu_id', function (req, res) {
	var info = req.body;
	info.modified = new Date();
	shackdb.Menu.findByIdAndUpdate(req.params.menu_id, info, {new: true}, function (err, post) {
		if (err) return res.err(err);
		res.json(post);
	});
});

app.delete('/menu/:menu_id', function (req, res) {
	shackdb.Menu.findByIdAndRemove(req.params.menu_id, function (err, post) {
		if (err) return res.send(err);
		res.json(post);
	});
});

app.listen(port);

