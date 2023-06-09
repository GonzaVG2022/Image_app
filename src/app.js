const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');
// Esta es nuestra aplicación
const app = express();
const errorHandler = require('./utils/errorHandler')
const path = require('path');

// Middlewares 
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); 
// routes
app.get('/', (req, res) =>{
    return res.send('Welcome to node')
});

app.use('/api/v1', router);

// middlewares desdpues de las rutas
app.use(errorHandler)

module.exports = app;