import express from 'express';
import router from './router';
import db from './config/db';

// Conectar a DB
(async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const server = express();

server.use('/api/products', router);

export default server;
