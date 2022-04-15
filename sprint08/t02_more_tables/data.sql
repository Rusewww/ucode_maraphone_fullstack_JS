USE ucode_web;

INSERT INTO powers(name, type)
VALUES ('Hook', 'defence');
INSERT INTO powers(name, type)
VALUES ('Kill', 'attack');
INSERT INTO powers(name, type)
VALUES ('Teleport', 'defence');

INSERT INTO heroes_powers(hero_id, power_id, power_points)
VALUES(1, 1, 50);
INSERT INTO heroes_powers(hero_id, power_id, power_points)
VALUES(2, 2, 100);
INSERT INTO heroes_powers(hero_id, power_id, power_points)
VALUES(2, 3, 75);
INSERT INTO heroes_powers(hero_id, power_id, power_points)
VALUES(3, 2, 100);
