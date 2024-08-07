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
  try {
    const { taskId } = req.params;
    const task = await Task.findById(taskId);

    if (!task) {
      const error = new Error('Tarea no encontrada');
      return res.status(404).json({ error: error.message });
    }

    if (task.project.toString() !== req.project.id) {
      const { message } = new Error('Tarea no pertece al proyecto');
      return res.status(400).json({ error: message });
    }

    req.task = task;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error' });
  }
}
