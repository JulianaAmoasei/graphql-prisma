// const { ApolloServer } = require('apollo-server')
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {

  // await prisma.user.create({
  //   data: {
  //     nome: "Deise",
  //     email: "d@d.com",
  //     posts: {
  //       create: { 
  //         titulo: "primeiro Deise",
  //         conteudo: "oi oi",
  //       },
  //     },
  //   }
  // })

  const allUsers = await prisma.user.findMany({
    include: { 
      posts: true,
    },
  })
  console.dir(allUsers, { depth: null })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

// const server = new ApolloServer({ typeDefs: mainSchema, resolvers })
// server.listen({ port: 4000 }, () => console.log(`Servidor pronto em localhost:4000`))