```sql

-- toutes les promos, dans l'ordre alphabétique
SELECT *
FROM promo
ORDER BY name; -- Par défaut, ORDER BY est dans le sens ASC (ascendant), on peut inverser en utilisant DESC (descendant)

-- tous les étudiants, dans l'ordre alphabétique des noms de famille
SELECT *
FROM student
ORDER BY last_name,first_name; -- on ordonne par last_name puis par first_name

-- tous les étudiants de la promo 135 
SELECT *
FROM student
WHERE promo_id=135;

-- les étudiants dont le nom ou le prénom ressemble à "max"
SELECT *
FROM student
WHERE last_name ILIKE '%max%' OR first_name ILIKE '%max%'; -- les noms ou prénoms contiennent "max"

```