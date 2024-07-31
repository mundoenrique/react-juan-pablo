import { Sequelize } from 'sequelize';

// const db = new Sequelize('postgres://admin_user:123456@localhost:5400/rest_api_db', {
//   dialectOptions: { ssl: { require: false } },
// });

// const db = new Sequelize('postgres://admin_user:123456@localhost:5400/rest_api_db?ssl=true');

const db = new Sequelize('postgres://admin_user:123456@localhost:5400/rest_api_db');

export default db;
