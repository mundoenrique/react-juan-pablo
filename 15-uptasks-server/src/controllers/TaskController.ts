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
    const tasks = await Task.find({ project: req.project.id }).populate('project');

    try {
      res.json({ tasks });
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };

  static getTaskById = async (req: Request, res: Response) => {
    try {
      const { taskId } = req.params;
      const task = await Task.findById(taskId);

      if (!task) {
        const { message } = new Error('Tarea no encontrada');
        return res.status(404).json({ error: message });
      }

      if (task.project.toString() !== req.project.id) {
        const { message } = new Error('Tarea no pertece al proyecto');
        return res.status(400).json({ error: message });
      }

      res.json({ task });
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };

  static updateTask = async (req: Request, res: Response) => {
    try {
      const { params, body } = req;
      const { taskId } = params;
      const task = await Task.findByIdAndUpdate(taskId, body);

      if (!task) {
        const { message } = new Error('Tarea no encontrada');
        return res.status(404).json({ error: message });
      }

      if (task.project.toString() !== req.project.id) {
        const { message } = new Error('Tarea no pertece al proyecto');
        return res.status(400).json({ error: message });
      }

      res.send('Tarea actualizada');
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };

  static deleteTask = async (req: Request, res: Response) => {
    try {
      const { params, body } = req;
      const { taskId } = params;
      const task = await Task.findById(taskId);

      if (!task) {
        const { message } = new Error('Tarea no encontrada');
        return res.status(404).json({ error: message });
      }

      if (task.project.toString() !== req.project.id) {
        const { message } = new Error('Tarea no pertece al proyecto');
        return res.status(400).json({ error: message });
      }

      req.project.tasks = req.project.tasks.filter((task) => task.toString() !== taskId);
      await Promise.allSettled([task.deleteOne(), req.project.save()]);

      res.send('Tarea eliminada');
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };

  static Task = async (req: Request, res: Response) => {
    try {
      const { params, body } = req;
      res.json({ data: `${this.name} - ....: httpVerb= ${req.method}`, params, body });
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };
}
