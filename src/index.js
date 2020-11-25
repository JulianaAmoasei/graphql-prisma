const { ApolloServer, gql } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
 
const typeDefs = gql`
type User {
  id: Int
  nome: String
  email: String
  posts: [Post]
}

type Post {
  id: Int
  titulo: String
  conteudo: String
  publicado: Boolean
  autor: User
}

type Query {
  users: [User]
  postsByUser (id: ID): [Post]
  postsByReviewer (id: ID): [Post]
}

type Mutation {
  createUserAndPost (nome: String, email: String, titulo: String, conteudo: String): User
}
`
 
const resolvers = {
 User: {
  posts: (parent) => {
    return prisma.user.findOne({ where: { id: Number(parent.id)}}).posts()
  }
 },
 Query: {
   users: async () => {
    const allUsers = await prisma.user.findMany()
    return allUsers
   },
   postsByUser: async (_, args) => {
     return prisma.user
     .findOne({ where: { id: Number(args.id) }})
     .posts()
   },
   postsByReviewer: async (_, args) => {
     return prisma.review
     .findOne({ where: { id: Number(args.id) }})
     .reviewer()
     .posts()
   }
 },
 Mutation: {
  createUserAndPost: async (_, args) => {
    const newUser = await prisma.user.create({
      data: {
        nome: args.nome,
        email: args.email,
        posts: {
          create: {
            titulo: args.titulo,
            conteudo: args.conteudo
          }
        }
      }
    })
     return newUser
   }
 }
}
 
const server = new ApolloServer({ typeDefs, resolvers, prisma })
server.listen({ port: 4000 }, () => console.log(`Servidor pronto em localhost:4000`))