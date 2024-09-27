// Require de Express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config();
const cors = require('cors')
app.use(cors());

// Conexion con Mongoose
require('./config/database');

// Require del modulo index de rutas
const index_routes = require('./routes/index')
app.use('/', index_routes)


// Metodos de Api
app.get('/', (req, res) => {
    res.send('¡Hola rey del mundo!');
});


// Puerto || Port
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});