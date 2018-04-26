const mongoose = require('mongoose');
const Blank = mongoose.Blank;

const ProductDraft = new Blank({
  name: {
    type: String,
    unique: [true],
    required: [true]
  }
});

const Product = mongoose.model('product', ProductBlank);
module.exports = Product;


