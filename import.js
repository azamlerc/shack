// Flare Importer
// Andrew Zamler-Carhart

var flare = this;
var shackdb = require("./shackdb");
var modelPath = process.argv[2] || 'model.json';
var model = require('./' + modelPath);
var tasks = 0;

/*
shackdb.Menu.remove({});
*/

console.log('Importing from ' + modelPath);

for (var i = 0; i < model.menus.length; i++) {
	createMenu(model.menus[i]);
};

function createMenu(menu) {
	menu.created = new Date();
	menu.modifed = new Date();

	start();
	shackdb.Menu.create(menu, function (err, newMenu) {
		if (err) console.log(err);
		console.log('Menu ' + newMenu._id + ': ' + newMenu.name);

		finish();
	});
}

function start() {
	tasks++;
}

function finish() {
	tasks--;
	if (tasks == 0) {
		console.log('Done.');
		process.exit(0);
	}
}
