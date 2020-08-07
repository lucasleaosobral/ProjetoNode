import { dbConfig } from '../config/database'

const Sequelize = require('sequelize');

const connection = new Sequelize(dbConfig);

export { connection };