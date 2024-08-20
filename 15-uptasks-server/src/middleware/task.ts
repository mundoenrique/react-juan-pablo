import type { Request, Response, NextFunction } from 'express';
import Task, { type ITask } from '../models/Task';

declare global {
  namespace Express {
    interface Request {
      task: ITask;
    }
  }
}

export async function taskExists(req: Request, res: Response, next: NextFunction) {
  const { taskId } = req.params;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      const error = new Error('Tarea no encontrada');

      return res.status(404).json({ error: error.message });
    }

    req.task = task;

    next();
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error' });
  }
}

export async function taskBelongsToProject(req: Request, res: Response, next: NextFunction) {
  const { project, task } = req;

  if (task.project.toString() !== project.id.toString()) {
    const error = new Error('Acción no válida');

    return res.status(400).json({ error: error.message });
  }

  next();
}

export function hasAuthorization(req: Request, res: Response, next: NextFunction) {
  const { user, project } = req;

  if (user.id.toString() !== project.manager.toString()) {
    const error = new Error('Acción no válida');

    return res.status(400).json({ error: error.message });
  }

  next();
}
