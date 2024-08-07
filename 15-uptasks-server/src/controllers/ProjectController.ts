import type { Request, Response } from 'express';
import Project from '../models/Project';

export class ProjectController {
  static createProject = async (req: Request, res: Response) => {
    // const project = new Project(req.body);
    try {
      // await project.save();
      await Project.create(req.body);
      const payload = req.body;
      res.send('Poryecto creado');
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

  static getProjectById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const project = await Project.findById(id).populate('tasks');

      if (!project) {
        const error = new Error('Poryecto no encontraos');
        return res.status(400).json({ error: error.message });
      }

      res.json(project);
    } catch (error) {
      console.log(error);
    }
  };

  static updateProject = async (req: Request, res: Response) => {
    const { params, body } = req;
    const { id } = params;

    try {
      const project = await Project.findById(id);

      if (!project) {
        const error = new Error('Poryecto no encontrado');
        return res.status(400).json({ error: error.message });
      }

      project.projectName = body.projectName;
      project.clientName = body.clientName;
      project.description = body.description;
      project.save();

      res.send('Poryecto actulizado');
    } catch (error) {
      console.log(error);
    }
  };

  static deleteProject = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      // const project = await Project.findByIdAndDelete(id);
      const project = await Project.findById(id);

      if (!project) {
        const error = new Error('Poryecto no encontraos');
        return res.status(400).json({ error: error.message });
      }

      await project.deleteOne();

      res.send('Poryecto eliminado');
    } catch (error) {
      console.log(error);
    }
  };

  static Project = async (req: Request, res: Response) => {
    const {} = req.params;
    const {} = req.body;

    try {
      res.json({ data: `...Task Method: ${req.method}`, body: req.body, params: req.params });
    } catch (error) {
      console.log(error);
    }
  };
}
