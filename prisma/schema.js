const { nexusPrisma } = require('nexus-plugin-prisma')
const { objectType, queryType, makeSchema } = require('@nexus/schema')

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
      t.list.field("users", {
        type: "User",
        resolve: (_, __, context) => {
          return context.prisma.user.findMany()
        }
      })
    }
  })

  const schema = makeSchema({
    types: [Query, Post, User, Review],
    plugins: [nexusPrisma({ experimentalCRUD: true })],
    outputs: {
      schema: __dirname + '/schema.graphql',
      typegen: __dirname + '/generated/nexus.ts',
    },
    typegenAutoConfig: {
      contextType: 'Context.Context',
      sources: [
        {
          source: '@prisma/client',
          alias: 'prisma',
        },
        {
          source: require.resolve('./context'),
          alias: 'Context',
        },
      ],
    },
  })
  
  module.exports = {
    schema,
  }
