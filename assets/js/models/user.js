var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
    },
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
    birth: {
		type: String,
		required: true,
	},
});

var user = new mongoose.model('User', userSchema);

module.exports = user;