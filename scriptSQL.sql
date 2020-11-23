CREATE TABLE users(
   id INT AUTO_INCREMENT PRIMARY KEY,
   nome VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts(
	id INT AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(255) NOT NULL,
  conteudo TEXT NOT NULL,
  autorId INT NOT NULL,
  publicado BOOLEAN,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(autorId) REFERENCES users(id)
);

INSERT INTO users (nome, email)
VALUES 
   ("Ana", "a@a.com"),
   ("Bia", "b@b.com"),
   ("Carla", "c@c.com");

INSERT INTO posts (titulo, conteudo, autorId, publicado)
VALUES 
   ("primeiro Ana", "bla bla",1 , true),
   ("primeiro Bia", "ble ble",2 , true),
   ("primeiro Carla", "bli bli",3 , false); 