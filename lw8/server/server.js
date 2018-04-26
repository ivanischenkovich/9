const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/products');
mongoose.Promise = global.Promise;


app.listen(process.env.port || 6700, function() {
  console.log('Server running!');
});