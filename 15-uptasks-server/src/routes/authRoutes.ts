import { Router } from 'express';
import { body } from 'express-validator';
import { AuthController } from '../controllers/AuthController';
import { handleInputErrors } from '../middleware/validation';

const router = Router();

router.post(
  '/create-account',
  body('name').notEmpty().withMessage('EL nombre no puede estar vacio'),
  body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener min 8 caracteres'),
  body('password_confirmation').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Los pasword no son iguales');
    }

    return true;
  }),
  body('email').isEmail().withMessage('Correo no válido'),
  handleInputErrors,
  AuthController.createAccount
);

router.post(
  '/confirm-account',
  body('token').notEmpty().withMessage('El Token no puede ir vacio'),
  handleInputErrors,
  AuthController.confirmAccount
);

router.post(
  '/login',
  body('email').isEmail().withMessage('E-mail no válido'),
  body('password').notEmpty().withMessage('El password no puede ir vacio'),
  handleInputErrors,
  AuthController.login
);

router.post(
  '/request-code',
  body('email').isEmail().withMessage('E-mail no válido'),
  handleInputErrors,
  AuthController.requestConfirmationCode
);

export default router;
