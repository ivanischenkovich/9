const express = require('express');
const router = express.Router();

const ERROR404 = {
  error: '404 Not Founded'
};

const ERROR500 = {
  error: '500 Internal Server Error'
};

module.exports = router;