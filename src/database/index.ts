import { createConnection } from 'typeorm';

createConnection()
        .then(async (connection) => {
            console.log("connected to the database")
        }).catch(error => console.log(error));