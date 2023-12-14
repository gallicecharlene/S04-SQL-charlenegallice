INSERT INTO "student" ('first_name', 'last_name', 'promo_id')
VALUES ('chuck', 'Norris',5);

INSERT INTO "promo" ('name')
VALUES ('César');

UPDATE promo
SET name = 'Cléo'
WHERE id = 5;

DELETE FROM 'promo'
WHERE id = 123;
