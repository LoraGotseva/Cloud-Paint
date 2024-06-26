const Image = require('./models/image.js')

module.exports = (mongoose) => ({
	uploadImage: async function uploadImage(requestBody) {
		let model = new Image({
			userId: requestBody.userId,
			imgEncoded: requestBody.imgEncoded
		});

		await model.save();
	}
})