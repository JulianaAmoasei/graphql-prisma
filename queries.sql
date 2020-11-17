-- sqlite

CREATE TABLE User(
   id INTEGER PRIMARY KEY,
   nome TEXT NOT NULL,
   email TEXT NOT NULL,
   created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- mysql

CREATE TABLE User(
   id INT AUTO_INCREMENT PRIMARY KEY,
   nome VARCHAR(255) NOT NULL,
   email VARCHAR(255) NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- sqlite

CREATE TABLE Post(
	id INTEGER PRIMARY KEY,
	titulo TEXT NOT NULL,
   	conteudo TEXT NOT NULL,
   	autorId INTEGER NOT NULL,
   	publicado BOOLEAN,
	created_at TEXT DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(autorId) REFERENCES user(id)
);

-- mysql

CREATE TABLE Post(
	id INT AUTO_INCREMENT PRIMARY KEY,
	titulo VARCHAR(255) NOT NULL,
   conteudo TEXT NOT NULL,
   autorId INT NOT NULL,
   publicado BOOLEAN,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(autorId) REFERENCES User(id)
);

INSERT INTO User (nome, email)
VALUES 
   ("Ana", "a@a.com"),
   ("Bia", "b@b.com"),
   ("Carla", "c@c.com");

INSERT INTO Post (titulo, conteudo, autorId, publicado)
VALUES 
   ("primeiro Ana", "bla bla",1 , true),
   ("primeiro Bia", "ble ble",2 , true),
   ("primeiro Carla", "bli bli",3 , false);