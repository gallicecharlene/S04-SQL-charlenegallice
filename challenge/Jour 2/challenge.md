# Challenge

## Etape 0

Exécutez les scripts de mise en place de la BDD :

- init_db.sql

```bash
psql -U postgres -f init_db.sql
```

- create_db.sql

```bash
psql -U trombi -d trombi -f create_db.sql
```

## Etape 1

- Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5
- Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'orga
- Mettre à jour la promo 5 pour la renommer "Cleo"
- Supprimer la promo 123

## BONUS

Modifier le fichier dbClient.js pour se connecter à la BDD locale.