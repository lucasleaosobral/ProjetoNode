
import 'reflect-metadata'
import express = require('express');
import { router } from './routes';
import './database/index';

const app = express();

app.use(express.json());
app.use(router);

export { app };