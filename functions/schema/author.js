const mongoose = require("mongoose");
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  books: {
    type: String,
    required: true, 
  },
  datePublished: {
    type: Date,
    required: true,
  }
});

module.exports = authorSchema;