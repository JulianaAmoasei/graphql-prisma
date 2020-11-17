const { ApolloServer } = require('apollo-server')
const mainSchema = require('./schema.graphql')

const resolvers = {
  Query: {
    users: () => {
      return [{id: 1, nome: "nome"}]
    },
    posts: () => {
      return [{id: 1, titulo: "titulo"}]
    }
  }
}

new ApolloServer({ typeDefs: mainSchema, resolvers }).listen(
  { port: 4000 },
  () =>
    console.log(
      `🚀 Server ready at: http://localhost:4000`,
    ),
)