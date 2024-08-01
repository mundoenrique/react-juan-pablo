import express from 'express';
import colors from 'colors';
import swaggerUi from 'swagger-ui-express';
import router from './router';
import db from './config/db';
import swaggerSpec from './config/swagger';

// Conectar a DB
export async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
  } catch (error) {
    console.error(colors.red.bold('Unable to connect to the database'));
    // console.error(colors.red.bold('Unable to connect to the database: '), error);
  }
}
connectDB();

// Instancia de express
const server = express();

// Leer datos del formulario
server.use(express.json());

server.use('/api/products', router);
// Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
export default server;
