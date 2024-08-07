import type { Request, Response } from 'express';
import Project from '../models/Project';
import Task from '../models/Task';

export class TaskController {
  static CreateTask = async (req: Request, res: Response) => {
    const { body, project } = req;

    try {
      const task = new Task(body);
      task.project = project.id;
      project.tasks.push(task.id);

      await Promise.allSettled([task.save(), project.save()]);

      res.send('Tarea creada');
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };

  static getProjectTasks = async (req: Request, res: Response) => {
    const tasks = await Task.find({ project: req.project.id });

    try {
      res.json({ tasks });
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };

  static Task = async (req: Request, res: Response) => {
    const {} = req.params;
    const {} = req.body;

    try {
      res.json({ data: `...Task Method: ${req.method}`, body: req.body, params: req.params });
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };
}
