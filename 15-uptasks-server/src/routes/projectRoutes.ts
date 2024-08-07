import { Router } from 'express';
import { body, param } from 'express-validator';
import { projectExists } from '../middleware/project';
import { handleInputErrors } from '../middleware/validation';
import { ProjectController } from '../controllers/ProjectController';
import { TaskController } from '../controllers/TaskController';

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

router.get(
  '/:id',
  param('id').isMongoId().withMessage('No es un id válido'),
  handleInputErrors,
  ProjectController.getProjectById
);

router.put(
  '/:id',
  param('id').isMongoId().withMessage('No es un id válido'),
  body('projectName').notEmpty().withMessage('EL nombre del proyecto es obligatorio'),
  body('clientName').notEmpty().withMessage('EL nombre del cliente es obligatorio'),
  body('description').notEmpty().withMessage('La descripción del proyecto es obligatoria'),
  handleInputErrors,
  ProjectController.updateProject
);

router.delete(
  '/:id',
  param('id').isMongoId().withMessage('No es un id válido'),
  handleInputErrors,
  ProjectController.deleteProject
);
router.param('projectId', projectExists);
router.post(
  '/:projectId/tasks',
  body('name').notEmpty().withMessage('EL nombre de la tarea es obligatorio'),
  body('description').notEmpty().withMessage('La descripción de la tarea es obligatoria'),
  handleInputErrors,
  TaskController.CreateTask
);

router.get('/:projectId/tasks', TaskController.getProjectTasks);
router.get(
  '/:projectId/tasks/:taskId',
  param('taskId').isMongoId().withMessage('ID no válido'),
  TaskController.getTaskById
);

export default router;
