USE ucode_web;

SELECT h.name
FROM heroes h
         JOIN heroes_powers hp on h.id = hp.hero_id
where h.description != 'human'