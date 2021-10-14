const Book = require('../models/Book')
const Author = require('../models/Author')

const methods = {
  getAllBooks: async (args = {}) => await Book.find(args),
  getBook: async (id) => await Book.findById(id),
  getAllAuthors: async () => await Author.find(),
  getAuthor: async (id) => await Author.findById(id),
  createAuthor: async (args) => {
    const newAuthor = new Author(args)
    return await newAuthor.save()
  },
  createBook: async (args) => {
    const newBook = new Book(args)
    return await newBook.save()
  },
}

module.exports = methods
