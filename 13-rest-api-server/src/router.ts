import { Router } from 'express';
import { body, param } from 'express-validator';
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateAvailability,
  updateProduct,
} from './handlers/produt';
import { handleInputErrors } from './middleware';

const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The Product ID
 *           example: 1
 *         name:
 *           type: string
 *           description: The Product name
 *           example: Monitor Curvo de 49 Pulgadas
 *         price:
 *           type: number
 *           description: The Product price
 *           example: 300
 *         availability:
 *           type: boolean
 *           description: The Product availability
 *           example: true
 */

/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: Get a list of products
 *    tags:
 *      - Products
 *    description: Return a list of products
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Product'
 */
router.get('/', getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *    summary: Get a product by ID
 *    tags:
 *      - Products
 *    description: Return a product based on its unique ID
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The ID of the product to retrieve
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Successful Response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: Not found
 *      400:
 *        description: Bad Request - Invalid ID
 */
router.get(
  '/:id',
  param('id')
    .isInt()
    .withMessage('el id del producto debe ser númerico')
    .custom((value) => value > 0)
    .withMessage('EL id debe ser mayor a 0'),
  handleInputErrors,
  getProductById
);

/**
 * @swagger
 * /api/products:
 *  post:
 *    summary: Creates a new product
 *    tags:
 *      - Products
 *    description: Returns a new record in the database
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "Monitor Curvo 49 Pulgadas"
 *              price:
 *                type: number
 *                example: 399
 *    responses:
 *      201:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad Request - invalid input data
 */
router.post(
  '/',
  body('name').notEmpty().withMessage('El nombre del producto no debe estar vacio'),
  body('price')
    .isNumeric()
    .withMessage('El precio debe ser un número')
    .custom((value) => value > 0)
    .withMessage('EL precio debe ser mayor a 0'),
  handleInputErrors,
  createProduct
);

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    summary: Updates a product with user input
 *    tags:
 *      - Products
 *    description: Returns the updated product
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The ID of the product to retrieve
 *        required: true
 *        schema:
 *          type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: "Monitor Curvo 49 Pulgadas"
 *              price:
 *                type: number
 *                example: 399
 *              availability:
 *                type: boolean
 *                example: true
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      400:
 *        description: Bad Request - Invalid ID or Invalid input data
 *      404:
 *        description: Product Not Found
 */
router.put(
  '/:id',
  param('id')
    .isInt()
    .withMessage('el id del producto debe ser númerico')
    .custom((value) => value > 0)
    .withMessage('EL id debe ser mayor a 0'),
  body('name').notEmpty().withMessage('El nombre del producto no debe estar vacio'),
  body('price')
    .isNumeric()
    .withMessage('El precio debe ser un número')
    .custom((value) => value > 0)
    .withMessage('EL precio debe ser mayor a 0'),
  body('availability').isBoolean().withMessage('La disponibilidad debe ser booleano'),
  handleInputErrors,
  updateProduct
);

router.patch(
  '/:id',
  param('id')
    .isInt()
    .withMessage('el id del producto debe ser númerico')
    .custom((value) => value > 0)
    .withMessage('EL id debe ser mayor a 0'),
  handleInputErrors,
  updateAvailability
);

router.delete(
  '/:id',
  param('id')
    .isInt()
    .withMessage('el id del producto debe ser númerico')
    .custom((value) => value > 0)
    .withMessage('EL id debe ser mayor a 0'),
  handleInputErrors,
  deleteProduct
);

export default router;
