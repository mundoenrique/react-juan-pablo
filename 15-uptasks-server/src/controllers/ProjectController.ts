import type { Request, Response } from 'express';
import Project from '../models/Project';

export class ProjectController {
  static createProject = async (req: Request, res: Response) => {
    const project = new Project(req.body);
    try {
      await project.save();
      const payload = req.body;
      res.json({ data: `createProject by: ${req.method}`, payload });
    } catch (error) {
      console.log({ error });
    }
  };

  static getAllProjects = async (req: Request, res: Response) => {
    res.json({ data: `getAllProjects by: ${req.method}` });
  };

  static Project = async (req: Request, res: Response) => {
    const payload = req.body;
    res.json({ data: `... Project by: ${req.method}`, payload });
  };
}
