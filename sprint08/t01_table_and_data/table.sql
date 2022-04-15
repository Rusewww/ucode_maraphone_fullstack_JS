USE ucode_web;

CREATE TABLE IF NOT EXISTS `heroes`
(
    `id`          INT                             NOT NULL AUTO_INCREMENT,
    `name`        VARCHAR(30)                     NOT NULL,
    `description` VARCHAR(255)                    NOT NULL DEFAULT 'human',
    `class_role`  ENUM ('tank', 'support', 'dps') NOT NULL,
    PRIMARY KEY (id)
);