import { Router } from 'express';
import { body, param } from 'express-validator';
import { ProjectController } from '../controllers/ProjectController';
import { handleInputErrors } from '../middleware/validation';

const router = Router();

router.post(
  '/',
  body('projectName').notEmpty().withMessage('EL nombre del proyecto es obligatorio'),
  body('clientName').notEmpty().withMessage('EL nombre del cliente es obligatorio'),
  body('description').notEmpty().withMessage('La descripción del proyecto es obligatoria'),
  handleInputErrors,
  ProjectController.createProject
);
router.get('/', ProjectController.getAllProjects);

export default router;
