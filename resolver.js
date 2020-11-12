// const teste = [
//   {
//     id: 1,
//     nome: "xu",
//     postsWritten: [],
//     postsReviewed: []
//   }
  
// ]

const mainResolver = {
  Query: {
    users: (_, __, { prisma } ) => prisma.user.findMany()
  }
}

module.exports = mainResolver