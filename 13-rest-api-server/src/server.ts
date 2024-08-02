import express from 'express';
import colors from 'colors';
import cors, { CorsOptions } from 'cors';
import swaggerUi from 'swagger-ui-express';
import router from './router';
import db from './config/db';
import swaggerSpec, { swaggerUiOptions } from './config/swagger';

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

// Cors Permitir conexxiones externas
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error(`CORS origin denied ${origin}`));
    }
  },
};

server.use(cors(corsOptions));

// Leer datos del formulario
server.use(express.json());

server.use('/api/products', router);
// Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));
export default server;
