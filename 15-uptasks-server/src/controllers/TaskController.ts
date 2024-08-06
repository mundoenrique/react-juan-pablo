import type { Request, Response } from 'express';
import Project from '../models/Project';
import Task from '../models/Task';

export class TaskController {
  static CreateTask = async (req: Request, res: Response) => {
    const { projectId } = req.params;
    const {} = req.body;

    try {
      const project = await Project.findById(projectId);

      if (!project) {
        const error = new Error('Poryecto no encontrado');
        return res.status(400).json({ error: error.message });
      }

      const task = new Task(req.body);
      task.project = project.id;
      await task.save();
      project.tasks.push(task.id);
      await project.save();

      res.json({ data: `CreateTask method: ${req.method}`, body: req.body, project, task });
    } catch (error) {
      console.log(error);
    }
  };

  static Task = async (req: Request, res: Response) => {
    const {} = req.params;
    const {} = req.body;

    try {
      res.json({ data: `...Task Method: ${req.method}`, body: req.body, params: req.params });
    } catch (error) {
      console.log(error);
    }
  };
}
