const User = require('../models/user.js')

module.exports = (mongoose) => ({
	createUser: async function createUser(requestBody) {
		let model = new User({
			username: requestBody.username,
			email: requestBody.email,
			password: requestBody.password,
			birth:requestBody.birth
		});
		
		await model.save();
	},
	loginUser: async function loginUser(requestBody) {
		return await User.findOne({email: requestBody.email})
		.then((model) => {
			if(model.password === requestBody.password){
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