const express = require('express');
const Parser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/products', {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;

app.use(Parser.json());
app.use('/api', require('./routes/routes'));

app.use(function(req, res, next) {
  res.status(404);
  res.send({ error: 'Not found' });
  return;
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({ error: err.message });
  return;
});

app.listen(process.env.port || 6700, function() {
  console.log('Server running! Port 6700');
});