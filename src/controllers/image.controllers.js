const catchError = require('../utils/catchError');
const Image = require('../models/Image');
const fs = require('fs');
const path = require('path');


const getAll =catchError(async(req, res) => {
    const images = await Image.findAll();
    return res.json(images);
})
const create = catchError(async(req, res) => {
    const url = req.protocol + "://" + req.headers.host + "/uploads/" + req.file.filename;
		const filename = req.file.filename;
    const image = await Image.create({ url, filename });
    return res.status(201).json(image);
});
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const image = await Image.findByPk(id);
		if(!image) return res.sendStatus(404);
    fs.unlinkSync(path.join(__dirname, '..', 'public', 'uploads', image.filename));
    await image.destroy();
    return res.sendStatus(204);
});

module.exports = {
    create,
    getAll,
    remove
}