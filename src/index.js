const { ApolloServer } = require('apollo-server')

const { schema } = require('../prisma/schema')
const { createContext } = require('./context')

const server = new ApolloServer({ schema, context: createContext })
server.listen({ port: 4000 }, () => console.log(`Servidor pronto em localhost:4000`))