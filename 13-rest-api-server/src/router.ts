import { Router } from 'express';
import { body } from 'express-validator';
import { createProduct, getProductById, getProducts } from './handlers/produt';
import { handleInputErrors } from './middleware';

const router = Router();
// Routing
router.get('/', getProducts);
router.get('/:id', getProductById);

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

router.put('/', (req, res) => {
  res.json('Desde Put');
});

router.patch('/', (req, res) => {
  res.json('Desde Patch');
});

router.delete('/', (req, res) => {
  res.json('Desde Delete');
});

export default router;
