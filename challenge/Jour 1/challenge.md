# Challenge

## Etape 1: écrire du SQL

Créer un fichier sql.md. Dans ce fichier, écrire les requêtes SQL pour obtenir les informations suivantes :

- toutes les promos, dans l'ordre alphabétique
- tous les étudiants, dans l'ordre alphabétique des noms de famille
- tous les étudiants de la promo 135
- les étudiants dont le nom ou le prénom ressemble à "max"

Vous pouvez les tester dans le terminal.

## Etape 2 : récupérer les résultats

On souhaite maintenant pouvoir exécuter ces requêtes dans un fichier ".js".
Créer un fichier challenge.js. Dans ce fichier on veut 4 fonctions :

- getAllPromo : 
  - pas de paramètre à la fonction
  - récupère toutes les promos, dans l'ordre alphabétique et les affiche dans la console
- getAllStudentOrderedByLastName : 
  - pas de paramètre à la fonction 
  - récupère tous les étudiants, dans l'ordre alphabétique des noms de famille et les affiche dans la console
- getStudentsByid : 
  - un paramètre `promoId`
  - récupère tous les étudiants qui ont comme `promo_id` la valeur de `promoId` et les affiche dans la console
- findStudent :
  - un paramètre `value`
  - récupère tous les étudiants qui ont le nom ou le prénom qui ressemble à la valeur de `value` et les affiche dans la console  

## BONUS

Mettre en place dans le projet Trombinoclock la liaison à la BDD (client).

Utiliser celle-ci pour afficher la liste des promos et la liste des étudiants d'une promo.