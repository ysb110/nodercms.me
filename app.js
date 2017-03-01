var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var async = require('async');
var themes = require('./lib/themes.lib');
var router = require('./lib/route-map.lib');
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));
async.series([(callback) => {
	themes.init(app, callback);
}] ,(err)=>{
	if (err) {

	} else {
		var server = http.createServer(app);
		server.listen(80);
		server.on('error', (err) => {
			log.info(err);
			process.exit(1);
		});
	}
});