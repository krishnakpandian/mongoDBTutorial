const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json);
const PORT = process.env.port || 3000;
const routes = require('./routes/routes.js');

app.use('/', routes);

app.listen(PORT, () => {
    console.log('Server Running on PORT ' + PORT);
});