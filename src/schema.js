const { objectType, queryType } = require('@nexus/schema')
 
const User = objectType({
 name: "User",
 definition(t) {
   t.model.id()
   t.model.nome()
   t.model.email()
   t.model.posts()
   t.model.createdAt()
 }
})
 
const Post = objectType({
 name: "Post",
 definition(t) {
   t.model.id()
   t.model.titulo()
   t.model.conteudo()
   t.model.publicado()
   t.model.users()
   t.model.createdAt()
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
   t.model.createdAt()
 }
})


