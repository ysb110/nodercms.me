var fs = require('fs');
var path = require('path');
var hbs = require('express-hbs');
var _ = require('underscore');
var requireAll = require('require-all');
// var options = require('../core/models/options.model');
/**
 * 读取 Helper
 */
var helpers = requireAll({
  dirname: path.join(__dirname, '../core/helpers/'),
  filter: /(.+)\.helper\.js$/,
  excludeDirs: /^\.(git|svn)$/
});

/**
 * 读取 Async Helper
 */
var asyncHelpers = requireAll({
  dirname: path.join(__dirname, '../core/helpers/'),
  filter: /(.+)\.asyncHelper\.js$/,
  excludeDirs: /^\.(git|svn)$/
});

/**
 * 注册 Helper
 */
_.forEach(helpers, function (helper, key) {
  hbs.registerHelper(key, helper);
});

/**
 * 注册 Async Helper
 */
_.forEach(asyncHelpers, function (helper, key) {
  hbs.registerAsyncHelper(key, helper);
});

/* 设置莫办引擎  */
function viewEngine(app, directory) {
	app.cache = {};
	app.engine('hbs', hbs.express4({
		layoutsDir: 'public/themes/' + directory,
	    partialsDir: 'public/themes/' + directory,
	    extname: '.hbs'
	}));
	app.set('view engine', '.hbs');
	app.set('views', 'public/themes/' + directory);
}
exports.init = (app, callback)=> {
	// options.findOne({name: 'sitInfo'}, (err, siteInfo) => {
	// 	if (err) {
	// 		err.type = 'database';
	// 		return callback(err);
	// 	}
		(function checkDirectory(directory) {
			fs.stat(path.join(__dirname, '../public/themes/' + directory), (err, stats) => {
				if (stats && stats.isDirectory()) {
					viewEngine(app, directory);
					callback();
				}
			});
		})(/*_.get(siteInfo, 'value.theme') ||*/ 'default');
	// });
}