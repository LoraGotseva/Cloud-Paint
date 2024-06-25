var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
	imgName: {
		type: String,
		required: true,
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

var image = new mongoose.model('Image', imageSchema);

module.exports = image;