require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core')
const mongoose = require('mongoose')

// Load schema and resolver
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')
const methods = require('./data/db')

const main = async () => {
  // Connect to mongoDB
  await mongoose.connect(process.env.MONGO_URL)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ methods }), // Load db methods
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  })

  const app = express()
  await server.start()
  server.applyMiddleware({ app })

  const PORT = process.env.PORT || 4000
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
}

main().catch((error) => console.log(error))
