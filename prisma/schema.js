const { nexusPrisma } = require('nexus-plugin-prisma')
const { objectType, stringArg, intArg, scalarType, makeSchema } = require('@nexus/schema')
const { pathToArray } = require('graphql/jsutils/Path')
const path = require('path')

const Post = objectType({
  name: "Post",
  definition(t) {
    t.int("id")
    t.string("titulo")
    t.string("conteudo", { nullable: true })
    t.boolean("publicado", { nullable: true })
    t.field("reviews", {
      type: Review,
      list: [false],
      nullable: true,
    })
    t.field("autor", {
      type: User,
      nullable: true,
    })
    t.field("createdAt", {
      type: DateTime,
      nullable: true,
    })
  }
})

const Review = objectType({
  name: "Review",
  definition(t) {
    t.int("id")
    t.field("post", {
      type: Post,
      nullable: true,
    })
    t.field("reviewer", {
      type: User,
      nullable: true,
    })
    t.boolean("aprovado", { nullable: true })
    t.int("nota", { nullable: true })
  }
})

const User = objectType({
  name: "User",
  definition(t) {
    t.int("id")
    t.string("nome")
    t.field("postsWritten", {
      type: Post,
      list: [false],
      nullable: true,
    })
    t.field("postsReviewed", {
      type: Review,
      list: [false],
      nullable: true,
    })
    t.field("createdAt", {
      type: DateTime,
      nullable: true,
    })
  }
})
const DateTime = scalarType({
  name: "DateTime",
  serialize: (value) => value.toISOString(),
  parseValue: (value) => new Date(value),
  parseLiteral: (ast) => new Date(ast.value)
});

const Query = objectType({
  name: "Query",
  definition(t) {
    t.field("users", {
      type: User,
      list: [false],
      nullable: true,
      resolve: (_, __, { prisma }) => {
        return prisma.users.findMany()
      }
    })
    t.field("posts", {
      type: Post,
      list: [false],
      nullable: true,
      resolve: (_, __, { prisma }) => {
        return prisma.posts.findMany()
      }
    })
  }
})

const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.field("createPost", {
      type: Post,
      nullable: true,
      args: {
        titulo: stringArg({ required: true }),
        conteudo: stringArg(),
        autor: intArg(),
      },
    })
  }
})

const schema = makeSchema({
  types: [User, Post, Review, Query, Mutation, DateTime],
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    schema: __dirname + './generated/schema.graphql',
    typegen: __dirname + './generated/nexus.ts'
  }
})

module.exports = schema
