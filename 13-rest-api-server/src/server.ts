import express from 'express';
import colors from 'colors';
import router from './router';
import db from './config/db';

// Conectar a DB
(async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
  } catch (error) {
    console.error(colors.red.bold('Unable to connect to the database:'), error);
  }
})();

const server = express();

server.use('/api/products', router);

export default server;
