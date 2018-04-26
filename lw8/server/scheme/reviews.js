const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  productId: {
    type: String,
  },

});

const Review = mongoose.model('review', ReviewSchema);

module.exports = Review;