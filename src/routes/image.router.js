const { create, getAll, remove } = require('../controllers/image.controllers');
const express = require('express');
const upload = require('../utils/multer');


const imageRouter = express.Router();

imageRouter.route('/')
.get(getAll)
.post(upload.single('image'), create); //remplazamos el single con array para que suban muchas img

imageRouter.route('/:id')
		.delete(remove)
module.exports = imageRouter;