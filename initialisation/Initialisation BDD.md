# Initialisation de la BDD

Quand on installe le logiciel PostgreSQL, par défaut, un utilisateur "postgres" est créé.

Cet utilisateur a tous les droits !

Pour limiter les droits, on va créer un nouvel utilisateur, qui n'aura des permissions que sur une BDD.

` un projet => une bdd => un utilisateur `

## Création d'un utilisateur

On crèe un utilisatieur "trombi" qui va être l'administrateur de notre BDD.

Pour créer un utilisateur, il faut avoir le droit de le créer, il faut utiliser le compte 'postgres' pour le faire.

Je me connecte en tant que 'postgres' dans le terminal Ubuntu :

```bash
sudo -i -u postgres
```

Il ne faut pas confondre les comptes systèmes (Ubuntu) avec les utilisateurs de la BDD (PostgreSQL).

Le compte `student` existe dans le système mais pas en BDD.

Le compte `postgres` existe dans le système mais également en BDD.

Le compte `trombi` n'existe pas dans le système mais va exister en BDD.

Je peux donc venir utiliser la CLI PostgreSQL en tant que 'postgres' en tapant `psql`.

Je peux donc créer l'utilisateur "trombi" au niveau de mon SGBD local :

```sql
-- requête SQL pour créer un rôle
-- WITH permet de lister les permissions accordées à ce rôle
-- login est une permission qui autorise la connexion via ce rôle (nécessaire pour pouvoir se connecter depuis notre serveur back et effectuer des requêtes)
CREATE ROLE trombi WITH login;

-- un USER est un rôle avec le droit de login
CREATE USER trombi;
```

Pour préciser le mot de passe du compte il faut ajouter `PASSWORD` :

```sql
CREATE USER trombi WITH PASSWORD 'trombi';
```

## Création de la BDD

On crèe une bdd "trombi" qui va contenir nos tables.

```sql
-- Je crèe une BDD nommée "trombi" dont le propriétaire est l'utilisateur "tombi" (créé à l'étape précédente)
-- le fait d'être OWNER sur une BDD sous-entend avoir tous les droits sur celle-ci.
CREATE DATABASE trombi OWNER trombi;
```
A chaque projet, nous viendrons créer une BDD spécifique avec son propre compte pour la gérer, ainsi on crèe une sépration pour amener de la sécurité.

## Scripts

Un script est un fichier qui va contenir un certain nombre d'instructions/requêtes.

Un script est pratique car il est facile à lancer. C'est aussi une façon de limiter les risques d'erreur humaine (fautes de frappe par exemple).

Un script va débuter avec `BEGIN` et se terminer par `COMMIT` ou `END` (c'est la même chose).

```bash
# -U je veux me connecter en tant que l'utilisateur "postgres"
# -f permet de donner le chemin jusqu'à un fichier à exécuter
psql -U postgres -f init_db.sql
```

## Connexion à la BDD

Dans le terminal, je vais pouvoir appeler `psql` en précisant l'utilisateur et la BDD :

```bash
# -U permet de préciser l'utilisateur
# -d permet de préciser la BDD
psql -U trombi -d trombi
```

## pg_hba.conf

Ce fichier permet de configurer comment les utilisateurs se connected à une ou plusieurs BDD.

C'est un fichier de configuration du logiciel PostgreSQL.

```bash
# local - correspond au type de connexion, ici on se connecte directement depuis la VM
# all - correspond à la BDD ou les BDD auxquelles nous voulons nous connecter (all signifie toutes les BDD)
# postgres - correspond au(x) compte(s) concerné(s) par la configuration
# peer - c'est le type d'authentification
local   all             postgres                               peer
```

Une connexion `peer` utilise les comptes du système d'exploitation pour se connecter.

Nous allons utiliser le mode `md5` qui va demander un mot de passe à chaque connexion.

```bash
local   all             postgres                               md5
```

Le type `trust` permet de se connecter sans avoir besoin de saisir un mot de passe, attention cette configuration n'est à utiliser qu'en développement.

Pour que les changements soient pris en compte, il faut redémarrer le service :

```bash
sudo systemctl restart postgresql
```

Il est possible de vérifier le statut avec la commande :

```bash
sudo systemctl status postgresql
```



