const express = require('express')
const imageController = require('../controllers/imageController')
const router = express.Router();
router.get('/img', imageController.findAll);
router.get('/img/:id', imageController.findOne);
router.post('/img', imageController.create);
router.patch('/img/:id', imageController.update);
router.delete('/img/:id', imageController.destroy);
module.exports = router