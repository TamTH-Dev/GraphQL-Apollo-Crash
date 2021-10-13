const { books, authors } = require('../data/static')

const resolvers = {
  Query: {
    books: async (_, __, { methods }) => {
      try {
        return await methods.getAllBooks()
      } catch (error) {
        console.error(error)
      }
      return null
    },
    book: (_, args) => books.find((book) => book.id == args.id),
    authors: async (_, __, { methods }) => {
      try {
        return await methods.getAllAuthors()
      } catch (error) {
        console.error(error)
      }
      return null
    },
    author: (_, args) => authors.find((author) => author.id == args.id),
  },
  Mutation: {
    async createAuthor(_, args, { methods }) {
      try {
        return await methods.createAuthor(args) 
      } catch (error) {
        console.error(error)
      }
      return null
    },
    async createBook(_, args, { methods }) {
      try {
        return await methods.createBook(args) 
      } catch (error) {
        console.error(error)
      }
      return null
    },
  },
  Book: {
    author: (parent, _) => {
      return authors.find((author) => author.id == parent.authorId)
    },
  },
  Author: {
    books: (parent, _) => {
      return books.filter((book) => book.authorId == parent.id)
    },
  },
}

module.exports = resolvers
