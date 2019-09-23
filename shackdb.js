var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';
mongoose.connect(url);

var MenuSchema = new mongoose.Schema({
	name: String,
	description: String,
	price: Number,
	calories: Number,
	created: {type: Date, default: Date.now},
	modified: {type: Date, default: Date.now}
});

var Menu = mongoose.model('Menu', MenuSchema);

shackdb = {Menu:Menu};
module.exports = shackdb;