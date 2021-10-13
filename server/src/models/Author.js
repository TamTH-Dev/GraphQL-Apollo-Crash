const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  books: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model('Author', Schema)
