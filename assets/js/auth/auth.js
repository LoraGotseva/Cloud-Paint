const User = require('../models/user.js')
const crypto = require('crypto-js')

module.exports = (mongoose) => ({
	createUser: async function createUser(requestBody) {
		let model = new User({
			username: requestBody.username,
			email: requestBody.email,
			password: crypto.SHA256(requestBody.password).toString(),
			birth:requestBody.birth
		});
		
		await model.save();
	},
	loginUser: async function loginUser(requestBody) {
		return await User.findOne({email: requestBody.email})
		.then((model) => {
			if(model.password === crypto.SHA256(requestBody.password).toString()){
				let json = { id: model._id, username: model.username }
				let token = btoa(JSON.stringify(json))
				return token;
			}
			else {
				throw new Error('Incorrect user credentials')
			}
		})
	}
})