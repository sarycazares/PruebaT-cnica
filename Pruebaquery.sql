
use pruebaBase;
create table usuarios(
idUsuario int primary key,
Nombre varchar(100),
Apellidos varchar(100),
Usuario varchar(100),
Contraseña varchar(100),
Niveles varchar(100)
);

create table niveles(
idNiveles int primary key,
Nivel varchar(100)
);

INSERT INTO usuarios (idUsuario,Nombre,Apellidos,Usuario,Contraseña,Niveles) VALUES
 ('2','Bryan','Nava', 'milestom','123','1');
 
 INSERT INTO usuarios (idNiveles,Nivel) VALUES
 ('4','1');usuarios
 