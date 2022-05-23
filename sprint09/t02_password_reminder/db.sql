USE ucode_web;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users
(
    id        INT(7) AUTO_INCREMENT,
    login     VARCHAR(15)  NOT NULL UNIQUE,
    password  VARCHAR(255) NOT NULL,
    full_name VARCHAR(63)  NOT NULL,
    email     VARCHAR(254)  NOT NULL UNIQUE,
    PRIMARY KEY (id)
);