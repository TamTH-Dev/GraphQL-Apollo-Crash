const Book = require('../models/Book')
const Author = require('../models/Author')

const methods = {
  getAllBooks: async () => await Book.find(),
  getAllAuthors: async () => await Author.find(),
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
