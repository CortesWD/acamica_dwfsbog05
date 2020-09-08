CREATE DATABASE ejercicio;
USE ejercicio;
/* TABLES CREATION */
CREATE TABLE bandas (
    id  INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    integrante INT NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_separacion DATE,
    pais VARCHAR(60)
    );
CREATE TABLE canciones(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  duracion INT NOT NULL,
  album INT NOT NULL,
  banda INT NOT NULL,
  fecha_publicacion DATE NOT NULL
);
CREATE TABLE albumes (
 id INT PRIMARY KEY AUTO_INCREMENT,
 nombre_banda  INT NOT NULL,
 nombre_album VARCHAR (100) NOT NULL,
 fecha_lanzamiento DATE NOT NULL
);

/* BANDAS DATA INSERTION */
INSERT INTO `bandas`
(`nombre`,
`integrante`,
`fecha_inicio`,
`fecha_separacion`,
`pais`)
VALUES
("U2",
6,
"1976/08/15",
null,
"Irlanda");
INSERT INTO `bandas`
  (`nombre`,
  `integrante`,
  `fecha_inicio`,
  `fecha_separacion`,
  `pais`)
VALUES
("Coldplay",
5,
"1996/01/20",
null,
"Inglaterra");

/* CANCIONES DATA INSERTION */
INSERT INTO canciones (`nombre`, `duracion`, `album`, `banda`, `fecha_publicacion`)
  VALUES ('With or Without You', '450000', 1, 1, '1987/10/10');
INSERT INTO canciones (`nombre`, `duracion`, `album`, `banda`, `fecha_publicacion`) 
  VALUES ('One', '345422', 1, 1, '1991/01/01');
INSERT INTO canciones (`nombre`, `duracion`, `album`, `banda`, `fecha_publicacion`) 
  VALUES ('The Scientist', '160000', 4, 2, '2002/01/01');
INSERT INTO canciones (`nombre`, `duracion`, `album`, `banda`, `fecha_publicacion`) 
  VALUES ('Yellow', '12000', 3, 2, '2002/01/01');

/* ALBUMES DATA INSERTION */
INSERT INTO albumes 
VALUES (NULL, 1, "Boy", "1980/01/20");
INSERT INTO albumes 
VALUES (NULL, 2, "Parachutes", "2000/01/20");

/* QUERY */
SELECT * FROM bandas;
SELECT * FROM bandas WHERE pais = 'Colombia';
SELECT * FROM bandas WHERE pais = 'Inglaterra';
SELECT * FROM bandas WHERE integrante > 4;
SELECT * FROM canciones WHERE YEAR(fecha_publicacion) > 1999;
-- UPDATE canciones SET duracion = 200000 WHERE id > 2;
SELECT * FROM canciones WHERE duracion > 180000;
SELECT * FROM albumes;