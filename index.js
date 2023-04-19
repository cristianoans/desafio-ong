
require('dotenv').config();
const express = require('express');
const app = express();

const ong = require('./routes/ong')

// para receber a requisição no formato json
app.use(express.json());

// rotas
app.use('/ong', ong)

// define a porta para o servidor
app.listen(process.env.DB_PORT);