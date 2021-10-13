const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  authorId: {
    type: String,
  }
})

module.exports = mongoose.model('Book', Schema)
