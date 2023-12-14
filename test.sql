BEGIN;

INSERT INTO "student" ("first_name", "last_name", "promo_id")
VALUES ('chuck', 'Norris',5);

INSERT INTO "promo" ("id", "name")
VALUES (2, 'César');

UPDATE promo
SET name = 'Cléo'
WHERE id = 5;

DELETE FROM "student"
WHERE "promo_id" = 123;

DELETE FROM "promo"
WHERE "id" = 123;

COMMIT;

