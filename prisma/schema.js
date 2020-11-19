const { nexusPrisma } = require('nexus-plugin-prisma')
const { objectType, queryType, makeSchema, mutationType } = require('@nexus/schema')

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id()
    t.model.nome()
    t.model.email()
    t.model.posts()
    t.model.created_at()
  }
})

const Post = objectType({
  name: "Post",
  definition(t) {
    t.model.id()
    t.model.titulo()
    t.model.conteudo()
    t.model.publicado()
    t.model.autor()
    t.model.created_at()
  }
})

const Review = objectType({
  name: "Review",
  definition(t) {
    t.model.id()
    t.model.post() 
    t.model.reviewer()
    t.model.aprovado()
    t.model.nota()
  }
})

  const Query = queryType({
    name: "Query",
    definition(t) {
      t.crud.users()
      t.crud.user()
      t.crud.reviews()
      t.list.field("postsAprovados", {
        type: "Post",
        resolve: (_, __, { prisma }) => {
          return prisma.post.findMany({
            where: { publicado: true },
            orderBy: {
              created_at: 'asc'
            }
          })
        }
      })
      t.list.field("autoresPublicados", {
        type: "User",
        resolve: (_, __, { prisma }) => {
          return prisma.user.findMany({
            where: {
              email: {
                contains: ".com"
              },
              posts: {
                some: {
                  publicado: true
                }
              }
            }
          })
        }
      })
    }
  })

  const Mutation = mutationType({
    name: "Mutation",
    definition(t) {
      t.crud.createOnePost()
    }
  })

  const schema = makeSchema({
    types: [Query, Mutation, Post, User, Review],
    plugins: [nexusPrisma({ experimentalCRUD: true })],
    outputs: {
      schema: __dirname + '/../src/schema.graphql',
      typegen: __dirname + '/../src/generated/nexus.ts',
    },
    typegenAutoConfig: {
      sources: [
        {
          source: '@prisma/client',
          alias: 'prisma',
        },
        {
          source: require.resolve('../src/context'),
          alias: 'Context',
        },
      ],
    },
  })
  
  module.exports = {
    schema,
  }
