// j'importe le client qui me permet d'envoyer des requêtes
const client = require("../../dbClient");

async function getAllPromo(){
    const sqlQuery = `
        SELECT *
        FROM promo
        ORDER BY name
        LIMIT 10; -- LIMIT permet de choisir le nombre de lignes à retourner
    `;

    const response = await client.query(sqlQuery);

    console.table(response.rows);
}

async function getAllStudentOrderedByLastName(){
    const sqlQuery = `
        SELECT *
        FROM student
        ORDER BY last_name,first_name
        LIMIT 10;
    `;

    const response = await client.query(sqlQuery);

    console.table(response.rows);
}

async function getStudentsByid(promoId){
    const sqlQuery = `
        SELECT *
        FROM student
        WHERE promo_id=${promoId};
    `;

    const response = await client.query(sqlQuery);

    console.table(response.rows);
}

async function findStudent(value){
    const sqlQuery = `
        SELECT *
        FROM student
        WHERE last_name ILIKE '%${value}%' OR first_name ILIKE '%${value}%';
    `;

    const response = await client.query(sqlQuery);

    console.log(response.rows);
}


async function main(){
    // j'utilise une fonction asynchrone pour attendre entre chaque appel
    // j'attends que getAllPromo soit terminée avant d'appeler getAllStudentOrderedByLastName
    // await getAllPromo();
    // await getAllStudentOrderedByLastName();
    // await getStudentsByid(135);
    await findStudent("max");
}

main();