import type { Request, Response } from 'express';
import Task from '../models/Task';

export class TaskController {
  static createTask = async (req: Request, res: Response) => {
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
    try {
      const tasks = await Task.find({ project: req.project.id }).populate('project');

      res.json({ tasks });
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };

  static getTaskById = async (req: Request, res: Response) => {
    try {
      const task = await Task.findById(req.task.id).populate({ path: 'completedBy', select: 'id name email' });

      res.json(task);
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };

  static updateTask = async (req: Request, res: Response) => {
    const { body, task } = req;

    try {
      task.name = body.name;
      task.description = body.description;
      await task.save();

      res.send('Tarea actualizada');
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };

  static deleteTask = async (req: Request, res: Response) => {
    const { project, task } = req;

    try {
      project.tasks = project.tasks.filter((projectTask) => projectTask.toString() !== task.id.toString());
      await Promise.allSettled([task.deleteOne(), project.save()]);

      res.send('Tarea eliminada');
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };

  static updateStatus = async (req: Request, res: Response) => {
    const { body, task, user } = req;
    const { status } = body;

    try {
      task.status = status;

      if (status === 'pending') {
        task.completedBy = null;
      } else {
        task.completedBy = user.id;
      }

      task.save();

      res.send('Estado la tarea actulizado');
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };

  static Task = async (req: Request, res: Response) => {
    const { params, body } = req;

    try {
      res.json({ data: `${this.name} - : httpVerb= ${req.method}`, params, body });
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };
}
