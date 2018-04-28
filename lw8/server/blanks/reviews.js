const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: [true]
  },
  productDescription: {
    type: String,
    required: [true]
  },
  created: { 
        type: Date,
        default: Date.now,
		required: [true]
    },
});

const Review = mongoose.model('review', ReviewSchema);

module.exports = Review;