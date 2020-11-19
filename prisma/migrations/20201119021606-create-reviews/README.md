# Migration `20201119021606-create-reviews`

This migration has been generated by Juliana Amoasei at 11/18/2020, 11:16:07 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `reviews` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `postId` INT NOT NULL,
    `reviewerId` INT NOT NULL,
    `aprovado` BOOLEAN NOT NULL DEFAULT false,
    `nota` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

ALTER TABLE `reviews` ADD FOREIGN KEY (`postId`) REFERENCES `posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `reviews` ADD FOREIGN KEY (`reviewerId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201119021606-create-reviews
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,41 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+model Post {
+  id         Int       @id @default(autoincrement())
+  titulo     String
+  conteudo   String
+  autorId    Int
+  publicado  Boolean?
+  created_at DateTime? @default(now())
+  users      User      @relation(fields: [autorId], references: [id])
+
+  @@index([autorId], name: "autorId")
+  @@map(name: "posts")
+}
+
+model User {
+  id         Int       @id @default(autoincrement())
+  nome       String
+  email      String
+  created_at DateTime? @default(now())
+  posts      Post[]
+  @@map(name: "users")
+}
+
+model Review {
+  id            Int      @default(autoincrement()) @id
+  postId        Int
+  post          Post     @relation(fields: [postId], references: [id])
+  reviewerId    Int
+  reviewer      User     @relation(fields: [reviewerId], references: [id])
+  aprovado      Boolean  @default(false)
+  nota          Int
+  @@map(name: "reviews")
+}
```

