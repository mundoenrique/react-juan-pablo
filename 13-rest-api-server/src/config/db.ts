import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

// const db = new Sequelize('postgres://admin_user:123456@localhost:5400/rest_api_db', {
//   dialectOptions: { ssl: { require: false } },
// });

// const db = new Sequelize('postgres://admin_user:123456@localhost:5400/rest_api_db?ssl=true');

const db = new Sequelize(process.env.DATABASE_URL, {
  models: [__dirname + '/../models/**/*.ts'],
  logging: false,
});

export default db;
