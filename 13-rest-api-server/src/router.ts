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
// Routing
router.get('/', getProducts);
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

router.post(
  '/',
  // Validación en el router
  body('name').notEmpty().withMessage('El nombre del producto no debe estar vacio'),
  body('price')
    .isNumeric()
    .withMessage('El precio debe ser un número')
    .custom((value) => value > 0)
    .withMessage('EL precio debe ser mayor a 0'),
  handleInputErrors,
  createProduct
);

router.put(
  '/:id',
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

router.patch('/:id', updateAvailability);

router.delete('/:id', deleteProduct);

export default router;
