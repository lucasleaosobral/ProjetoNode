import express from 'express';
import { router } from './routes';
import {connection} from './database/index';


const app = express();

app.use(express.json());
app.use(router);

//test db
connection.authenticate().then(() => console.log("conectado com sucesso"));
export { app };