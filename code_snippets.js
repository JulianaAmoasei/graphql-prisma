await prisma.user.create({
  data: {
    nome: 'Ana'
  },
})

// nesse create não tem que passar as colunas do banco e sim seguir o schema
// o autor: create vai criar um user novo também, além do post
// NESTED WRITE QUERY

await prisma.post.create({
  data: {
    titulo: 'primeiro post',
    conteudo: 'bla bla bla',
    autor: {
      create: {
        nome: 'Bia'
      }
    },
  }
})

const allUsers = await prisma.post.findMany({
  where: {
    publicado: false
  },
  include: {
    autor: true //inclui relacionamento com type Autor
  }
})