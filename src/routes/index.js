const express = require('express');
const imageRouter = require('./image.router');

const router = express.Router();

// colocar las rutas aquí
router.use("/images", imageRouter)

module.exports = router;