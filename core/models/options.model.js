var mongoose = require('mongoose');

var optionsSchema = new mongoose.Schema({
	name: {
		type: String, 
		required: true
	},
	value: mongoose.Schema.Types.Mixed
}, {
	collection: 'options',
	id: false
});
module.exports = mongoose.model('Options', optionsSchema);