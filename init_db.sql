-- BEGIN; -- début du script / début de la transaction

-- Je mets en place plusieurs requêtes dans un fichier pour tout exécuter petit à petit, je crèe un script !

-- il n'est pas possible de faire un DROP DATABASE dans une transaction
DROP DATABASE IF EXISTS trombi;
DROP USER IF EXISTS trombi;

CREATE USER trombi WITH PASSWORD 'trombi';

CREATE DATABASE trombi OWNER trombi;

-- COMMIT; -- fin du script
