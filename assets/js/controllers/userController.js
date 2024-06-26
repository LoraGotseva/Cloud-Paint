const UserModel = require('../models/user.js')
const { v4: uuidv4 } = require('uuid');

exports.create = async (req, res) => {
	if (!req.body.username && !req.body.email && !req.body.password && !req.body.phone) {
		res.status(400).send({ message: "Content can not be empty!" });
	}

	const newId = uuidv4();

	const user = new UserModel({
		id: newId,
		username: req.body.username,
		email: req.body.email,
		password: req.body.password,
		birth: req.body.birth
	});

	await user.save().then(data => {
		res.send({
			message: "User created successfully!!",
			user: data
		});
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while creating user"
		});
	});
};

exports.findAll = async (req, res) => {
	try {
		const user = await UserModel.find();
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

exports.findOne = async (req, res) => {
	try {
		const user = await UserModel.findById(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

exports.update = async (req, res) => {
	if (!req.body) {
		res.status(400).send({
			message: "Data to update can not be empty!"
		});
	}

	const id = req.params.id;

	await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
		if (!data) {
			res.status(404).send({
				message: `User not found.`
			});
		} else {
			res.send({ message: "User updated successfully." })
		}
	}).catch(err => {
		res.status(500).send({
			message: err.message
		});
	});
};

exports.destroy = async (req, res) => {
	await UserModel.findByIdAndRemove(req.params.id).then(data => {
		if (!data) {
			res.status(404).send({
				message: `User not found.`
			});
		} else {
			res.send({
				message: "User deleted successfully!"
			});
		}
	}).catch(err => {
		res.status(500).send({
			message: err.message
		});
	});
};