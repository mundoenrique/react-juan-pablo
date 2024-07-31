import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

// const db = new Sequelize('postgres://admin_user:123456@localhost:5400/rest_api_db', {
//   dialectOptions: { ssl: { require: false } },
// });

// const db = new Sequelize('postgres://admin_user:123456@localhost:5400/rest_api_db?ssl=true');

const db = new Sequelize(process.env.DATABASE_URL);

export default db;
