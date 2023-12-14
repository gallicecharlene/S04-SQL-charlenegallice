# SQL

SQL est un langage de requêtages.

Un langage de requêtage est un langage informatique qui va communiquer aux travers de requêtes.

Par exemple :

```sql
SELECT *
FROM recettes;
```

Une requête est une instruction se terminant par un ";".
`SELECT` et `FROM` sont des mots réservés dans le langage SQL.

A noter qu'ils sont écrits ici en majuscule alors que tout doit être écrit en minuscule et snake_case en SQL.

Par convention, les mots réservés seront écrits en majuscule.

Les mots réservés que nous devons connaître aujourd'hui :

- `SELECT` : cette instruction indique que nous souhaitons avoir un résultat. Dans le cadre du socle, nous allons utiliser `SELECT` pour retourner les lignes d'une table. `SELECT` sera suivi des colonnes que nous souhaitons voir apparaître dans le résultat.

```sql
-- je demande à retourner les informations contenues dans les colonnes "name" et "person_number"
SELECT name,person_number
```

```sql
-- * permet de requêter toutes les colonnes
SELECT *
```

- `FROM` : cette instruction indique la source des données. Dans le cadre du socle, nous n'utiliserons que des tables comme source de données.

```sql
-- exemple de requête
SELECT column_1, column_2
FROM my_table;
```

- `WHERE` : cette instruction permet de filtrer les résultats

```sql
-- je récupère les valeurs présentes dans les colonnes des résultats de la table "promo" dont le "name" est 'Katsudon'
SELECT * FROM promo WHERE name='Katsudon';
```

Un `WHERE` peut être composé de `AND` et/ou de `OR`.

```sql
-- je récupère les valeurs présentes dans les colonnes des résultats de la table "promo" dont le "name" est 'Katsudon' ou 'Big Bang'
SELECT * FROM promo WHERE name='Katsudon' OR name='Big Bang' OR name='Cosmos';
```

Il est possible d'utiliser `LIKE` pour faire des recherches dans des chaines de caractères.

Je peux donc rechercher toutes les promos qui commencent par 'K' :

```sql
-- % représente la suite de la chaine de caractères
SELECT *
FROM promo
WHERE name LIKE 'K%';
```

Pour récupérer toutes les promos qui finissent par 'K' :

```sql
-- % représente le début de la chaine de caractères
SELECT *
FROM promo
WHERE name LIKE '%K';
```

```sql
-- % représente une éventuelle suite de la chaine de caractères ou le début (la lettre K se trouve dans le résultat)
SELECT *
FROM promo
WHERE name LIKE '%K%';
```

`ILIKE` permet d'effectuer un filtrage sans faire attention à la différence entre majuscule et minuscule (insensible à la casse).

## PostgreSQL

PostgreSQL est un logiciel de gestion de bases de données relationnelles (Système de Gestion de Bases de Données Relationnelles).

Les SGBDR entre eux ont des petites différences.

S'il faut en retenir une seule vis à vis de PG (PostgreSQL), elle va être au niveau de la rigueur demandée dans les `" "` et les `' '`.

Il faut retenir que les noms de table et de colonnes doivent être entourés de guillemets `"` et le reste par des simples quotes `'`.

### Accès

Nous allons accéder à la BDD "trombi" de deux façons :

- via le terminal en utilisant le logiciel "psql"
- via NodeJS en utilisant le module "pg"

#### psql

```bash
# -h : hôte (adresse du serveur de la bdd)
# -U : utilisateur qui se connecte à la BDD
# -d : le nom de la BDD à laquelle je veux me connecter
psql -h pg.oclock.lan -U etudiant -d trombi
```
Cette ligne de commande va nous permettre d'accéder à la CLI (Interface de Ligne de Commande) de notre BDD, nous allons pouvoir la requêter.

Une fois la ligne exécutée, le mot de passe de l'utilisateur "etudiant" est demandé : `js4life`

Commandes utiles :

- `\dt;` : liste des tables présentes dans ma BDD
- `\d student;` : structure de la table "student" (liste des colonnes, types des colonnes)
- `exit;` : permet de revenir au terminal (CLI Ubuntu)

#### pg

Au niveau de la mise en place de la communication entre notre serveur Back et PostgreSQL, nous allons avoir besoin d'un fichier qui gère la connexion.

Le fichier "dbClient.js" contient les informations qui vont me permettre de requêter ma BDD.

Un client de connexion est un objet qui nous permettre de communiquer avec nos données.
```js
const { Client } = require("pg");

/// connexion à ma bdd
// le client me permet d'envoyer des requêtes
// le format de la chaine de connexion est le suivant :
// postgresql://utilisateur:password@server/bdd
const client = new Client("postgresql://etudiant:js4life@pg.oclock.lan/trombi");

// on lance la connexion à la BDD
client.connect();

module.exports = client;
```

Nous pourrons interroger la BDD au travers du `client`.

Le module `pg` permet de transmettre les requêtes SQL au travers de `client.query`

```js
const sqlQuery = "SELECT * FROM promo;";

client.query(sqlQuery);
```

Notre serveur Back va pouvoir ainsi discuter avec le serveur de BDD.
Toute discussion entre deux programmes/services/processus doit se faire de manière asynchrone.

Le serveur Back envoie une requête, il DOIT attendre la réponse.
Pour lui dire d'attendre la réponse, il faut utiliser `await`.

```js
await client(sqlQuery);
```

Il n'est pas possible d'utiliser `await` en dehors d'une fonction/méthode qui n'est pas `async`.

## CRUD

- Create
- Read
- Update
- Delete

Le CRUD va concerner tout ce que je peux créer/lire/modifier/supprimer en BDD.

Il y a deux types de syntaxe :

- structurelle, appelée DDL (Data Definition Language), va concerner la DATABASE, les TABLE, les COLONNES
- usuelle, appelée DML (Data Manipulation Language), va concerner les données enregistrées

### DDL

- CREATE : permet de créer/ajouter

par exemple : `CREATE DATABASE`, `CREATE TABLE`...

- ALTER : permet de modifier

par exemple : `ALTER TABLE` permet de modifier une table

- DROP : permet de supprimer

par exemple : `DROP TABLE` permet de supprimer une table

- RENAME : permet de modifier le nom

par exemple : `RENAME TABLE` permet de renommer la table

### DML

- SELECT : permet de récupérer des données
- INSERT : permet d'insérer des données
- UPDATE : permet de modifier des données
- DELETE : permet de supprimer des données

## Primary Key

La clef primaire est l'identifiant unique. Chaque enregistrement dans la table, aura une valeur unique dans cette colonne.

Sous-entendu, on ne peut pas trouver deux lignes différentes avec le même identifiant.

```sql
-- PRIMARY KEY permet d'indiquer la clef primaire d'une table
id INT PRIMARY KEY
```

## Foreign Key

La clef étrangère est une référence à une clef primaire d'une autre table.

Elle permet de faire la liaison entre les enregistrements de ces deux tables.

```sql
-- REFERENCES permet d'indiquer la clef étrangère
-- "promo"("id") indique que la colonne promo_id fait référence à la colonne "id" de la table "promo"
promo_id INT REFERENCES "promo"("id")
```