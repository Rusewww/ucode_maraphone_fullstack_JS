USE ucode_web;

SELECT h.name, p.name
FROM heroes h
         INNER JOIN powers p ON h.id = p.id;