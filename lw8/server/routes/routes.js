const express = require('express');
const router = express.Router();
const Product = require('../scheme/products');
const Review = require('../scheme/reviews');

const ERROR404 = {
  error: '404 Not Founded'
};

const ERROR500 = {
  error: '500 Internal Server Error'
};

router.get('/products', function(req, res, next) {
  Product.find({}).then(function(products) {
    res.send(products);
  }).catch(function(next) {
    res.send({error: '500'});
  });
});

router.get('/products/:id', function(req, res, next) {
  Product.findOne({_id: req.params.id}).then(function(product) {
    res.send(product);
  }).catch(function(next) {
    res.send({error: '404'});
  });
});

router.get('/reviews', function(req, res, next) {
  Review.find({}).then(function(reviews) {
    res.send(reviews);
  }).catch(function(next) {
    res.send({error: '500'});
  });
});

router.get('/reviews/:id', function(req, res, next) {
  Review.findOne({_id: req.params.id}).then(function(review) {
    res.send(review);
  }).catch(function(next) {
    res.send({error: '404'});
  });
});


router.get('/products/:id/reviews', function(req, res, next) {
  Review.find({productId: req.params.id}).then(function(reviews) {
    res.send(reviews);
  }).catch(function(next) {
    res.send({error: '404'});
  });
});

module.exports = router;