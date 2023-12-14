// j'importe le client qui me permet d'envoyer des requêtes
const client = require("../dbClient");

async function getAllPromos(){
    // la méthode .query du client permet de transmettre une requête SQL sous forme de string
    const response = await client.query('SELECT id FROM "promo";');

    // rows : lignes en anglais
    // dans la réponse retournée par la bdd, les lignes retournées seront dans response.rows
    console.log(response.rows);
}

getAllPromos();