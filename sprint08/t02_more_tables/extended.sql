USE ucode_web;

DROP TABLE IF EXISTS powers;
DROP TABLE IF EXISTS heroes_powers;

CREATE TABLE IF NOT EXISTS `powers`
(
    `id`      INT                        NOT NULL AUTO_INCREMENT,
    `name`    VARCHAR(30)                NOT NULL,
    `type`    ENUM ('attack', 'defence') NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS `heroes_powers`
(
    `hero_id`      INT NOT NULL,
    `power_id`     INT NOT NULL,
    `power_points` INT NOT NULL,
    FOREIGN KEY (hero_id) REFERENCES heroes(id),
    FOREIGN KEY (power_id) REFERENCES powers(id)
);