const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.port || 3000;
const Routes = require('./routes/routes');
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', Routes);

mongoose.connect(
    process.env.ENDPOINT,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
).then(() => {
    app.listen(PORT, () => { console.log('Running on Port ' + PORT);});
  }).catch((err) => {
    console.log(err);
  });
