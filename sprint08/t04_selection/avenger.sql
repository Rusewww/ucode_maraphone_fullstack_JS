USE ucode_web;

SELECT h.name, SUM(p.power_points)
FROM heroes h
         JOIN heroes_powers p ON h.id = p.hero_id
GROUP BY h.id
ORDER BY SUM(p.power_points) DESC
LIMIT 1;

SELECT h.name, SUM(p.power_points)
FROM heroes h
         JOIN heroes_powers p ON h.id = p.hero_id
GROUP BY h.id
ORDER BY SUM(p.power_points)
LIMIT 1;
