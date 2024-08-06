import type { Request, Response } from 'express';
import Project from '../models/Project';

export class ProjectController {
  static createProject = async (req: Request, res: Response) => {
    // const project = new Project(req.body);
    try {
      // await project.save();
      await Project.create(req.body);
      const payload = req.body;
      res.send('Poryecto creado exitosamente');
    } catch (error) {
      console.log({ error });
    }
  };

  static getAllProjects = async (req: Request, res: Response) => {
    try {
      const projects = await Project.find({});
      res.json(projects);
    } catch (error) {
      console.log(error);
    }
  };

  static Project = async (req: Request, res: Response) => {
    const payload = req.body;
    res.json({ data: `... Project by: ${req.method}`, payload });
  };
}
