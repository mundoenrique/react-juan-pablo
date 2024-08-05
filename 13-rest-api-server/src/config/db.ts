import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();
const ssLActive = process.env.SSL_ACTIVE === 'ON';

// const db = new Sequelize('postgres://admin_user:123456@localhost:5400/rest_api_db', {
//   dialectOptions: { ssl: { require: false } },
// });

// const db = new Sequelize('postgres://admin_user:123456@localhost:5400/rest_api_db?ssl=true');

const db = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: ssLActive ? { ssl: { require: true } } : undefined,
  models: [__dirname + '/../models/**/*'],
  logging: false,
});

export default db;
