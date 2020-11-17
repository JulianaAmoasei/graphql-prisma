CREATE TABLE user(
   id INTEGER PRIMARY KEY,
   nome TEXT NOT NULL,
   email TEXT NOT NULL,
   created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE post(
	id INTEGER PRIMARY KEY,
	titulo TEXT NOT NULL,
   	conteudo TEXT NOT NULL,
   	autorId INTEGER NOT NULL,
   	publicado BOOLEAN,
	created_at TEXT DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(autorId) REFERENCES user(id)
);

INSERT INTO user (nome, email)
VALUES 
   ("Ana", "a@a.com"),
   ("Bia", "b@b.com"),
   ("Carla", "c@c.com");

INSERT INTO post (titulo, conteudo, autorId, publicado)
VALUES 
   ("primeiro Ana", "bla bla",1 , true),
   ("primeiro Bia", "ble ble",2 , true),
   ("primeiro Carla", "bli bli",3 , false);
   
  SELECT * FROM user;
  SELECT * FROM post;