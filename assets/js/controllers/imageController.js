const ImageModel = require('../models/image.js')
const { v4: uuidv4 } = require('uuid');

exports.create = async (req, res) => {
	if (!req.body.imgName && !req.body.userId && !req.body.imgEncoded) {
		res.status(400).send({ message: "Content can not be empty!" });
	}

	const newId = uuidv4();

	const image = new ImageModel({
		_id: newId,
		imgName: req.body.imgName,
		userId: req.body.userId,
		imgEncoded: req.body.imgEncoded,
	});

	await image.save().then(data => {
		res.send({
			message: "Image saved successfully!!",
			user: data
		});
	}).catch(err => {
		res.status(500).send({
			message: err.message || "Some error occurred while saving image"
		});
	});
};

exports.findAll = async (req, res) => {
	try {
		const image = await ImageModel.find();
		res.status(200).json(image);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

exports.findOne = async (req, res) => {
	try {
		const image = await ImageModel.findById(req.params.id);
		res.status(200).json(image);
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

	await ImageModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
		if (!data) {
			res.status(404).send({
				message: `Image not found.`
			});
		} else {
			res.send({ message: "Image updated successfully." })
		}
	}).catch(err => {
		res.status(500).send({
			message: err.message
		});
	});
};

exports.destroy = async (req, res) => {
	await ImageModel.findByIdAndRemove(req.params.id).then(data => {
		if (!data) {
			res.status(404).send({
				message: `Image not found.`
			});
		} else {
			res.send({
				message: "Image deleted successfully!"
			});
		}
	}).catch(err => {
		res.status(500).send({
			message: err.message
		});
	});
};

exports.findAllByUserId = async (req, res) => {
	try {
		const image = await ImageModel.find({userId: req.params.userId});
		res.status(200).json(image);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};