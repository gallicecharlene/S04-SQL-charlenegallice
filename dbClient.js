/******************************/
/*****      chall 1       *****/
/******************************/


// const { Client } = require("pg");

// /// connexion à ma bdd
// // le client me permet d'envoyer des requêtes
// // le format de la chaine de connexion est le suivant :
// // postgresql://utilisateur:password@server/bdd
// const client = new Client("postgresql://etudiant:js4life@pg.oclock.lan/trombi");

// client.connect();

// // le client est le tunnel d'accès à la BDD
// module.exports = client;


/******************************/
/*****      chall 2       *****/
/******************************/
require('dotenv').config();

const { Client } = require("pg");

new Client(process.env.PG_URI);
//const client = new Client("postgresql://trombi:trombi@localhost/trombi");
// postgresql://utilisateur:password@server/bdd


client.connect((error) => {
    if (error) {
        console.error("Une erreur a lieu à la connexion avec notre BDD : ", error.message);
    } else {
        console.log("Connection à la BDD réussie !");
    }
});

module.exports = client;