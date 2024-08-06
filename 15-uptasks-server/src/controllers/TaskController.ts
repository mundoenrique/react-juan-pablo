import type { Request, Response } from 'express';
import Project from '../models/Project';
import Task from '../models/Task';

export class TaskController {
  static CreateTask = async (req: Request, res: Response) => {
    const { body, project } = req;

    try {
      const task = new Task(body);
      task.project = project.id;
      await task.save();
      project.tasks.push(task.id);
      await project.save();

      res.json({ data: `CreateTask method: ${req.method}`, body, project, task });
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
