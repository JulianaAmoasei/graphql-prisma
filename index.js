const { PrismaClient } = require('@prisma/client')
const { ApolloServer } = require('apollo-server')
const mainSchema = require('./schema.graphql')
const mainResolver = require('./resolver')

const prisma = new PrismaClient()

// async function main() {
//   await prisma.user.create({
//     data: {
//       nome: 'Ana'
//     },
//   })
//   await prisma.post.create({
//     data: {
//       titulo: 'primeiro post',
//       conteudo: 'bla bla bla',
//       autor: {
//         create: {
//           nome: 'Bia'
//         }
//       },
//     }
//   })

//   const post = await prisma.post.update({
//     where: { id: 1 },
//     data: { publicado: true },
//   })

//   const allUsers = await prisma.post.findMany({
//     where: {
//       publicado: false
//     },
//     include: {
//       autor: true
//     }
//   })
//   console.dir(allUsers)
// }

// main()
//   .catch((e) => {
//     throw e
//   })
//   .finally(async () => {
//     await prisma.$disconnect()
//   })

const server = new ApolloServer({
  typeDefs: mainSchema,
  resolvers: mainResolver,
  context: { prisma }
})
server.listen({ port: 4001 }, () => console.log('🚀 Server ready at: http://localhost:4001'))