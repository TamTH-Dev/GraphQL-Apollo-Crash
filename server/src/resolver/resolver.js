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
    book: async (_, { id }, { methods }) => {
      try {
        return await methods.getBook(id)
      } catch (error) {
        console.error(error)
      }
      return null
    },
    authors: async (_, __, { methods }) => {
      try {
        return await methods.getAllAuthors()
      } catch (error) {
        console.error(error)
      }
      return null
    },
    author: async (_, { id }, { methods }) => {
      try {
        return await methods.getAuthor(id)
      } catch (error) {
        console.error(error)
      }
      return null
    },
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
    author: async ({ authorId }, _, { methods }) => {
      try {
        return await methods.getAuthor(authorId)
      } catch (error) {
        console.error(error)
      }
      return null
    },
  },
  Author: {
    books: async ({ id }, _, { methods }) => {
      try {
        return await methods.getAllBooks({ authorId: id })
      } catch (error) {
        console.error(error)
      }
      return null
    },
  },
}

module.exports = resolvers
