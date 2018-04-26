const express = require('express');
const Parser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/products');
mongoose.Promise = global.Promise;

app.use(Parser.json());
app.use('/api', require('./routes/routes'));

app.listen(process.env.port || 6700, function() {
  console.log('Server running!');
});