DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
<<<<<<< HEAD
    PRIMARY KEY(id)
=======
    PRIMARY KEY(id);
>>>>>>> 84b11eafcc497b96e6d67dd976d45611e5e06253
);