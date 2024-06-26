var mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

var imageSchema = new mongoose.Schema({
	_id: {
		type: String, 
		default: () => uuidv4(),
		unique: true,
		auto: true 
	},
	userId: {
		type: String,
		required: true,
    },
    imgEncoded: {
		type: String,
		required: true,
    },
});

var image = new mongoose.model('images', imageSchema);

module.exports = image;