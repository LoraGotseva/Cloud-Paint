var mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

var userSchema = new mongoose.Schema({
	_id: {
		type: String, 
		default: () => uuidv4(),
		unique: true,
		auto: true 
	},
	username: {
		type: String,
		unique: true,
		required: true,
    },
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
    birth: {
		type: String,
		required: true,
	}
});

var user = new mongoose.model('users', userSchema);

module.exports = user;