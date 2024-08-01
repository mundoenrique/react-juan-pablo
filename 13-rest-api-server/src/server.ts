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

// Instancia de express
const server = express();

// Leer datos del formulario
server.use(express.json());

server.use('/api/products', router);

server.get('/api', (req, res) => {
  res.json({ msg: 'Desde API' });
});

export default server;
