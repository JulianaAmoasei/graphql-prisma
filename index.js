const { ApolloServer } = require('apollo-server')
const { PrismaClient } = require("@prisma/client")
const schema = require('./prisma/schema')
// const mainSchema = require('./schema.graphql')

const prisma = new PrismaClient()

// const resolvers = {
//   Query: {
//     users: () => {
//       return prisma.users.findMany()
//     },
//     posts: () => {
//       return prisma.posts.findMany()
//     }
//   }
// }

new ApolloServer({ schema, context: { prisma } })
  .listen({ port: 4000 }, () => console.log(`🚀 Server ready at: http://localhost:4000`,))