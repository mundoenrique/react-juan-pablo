import type { Request, Response } from 'express';
import Project from '../models/Project';

export class ProjectController {
  static createProject = async (req: Request, res: Response) => {
    const project = new Project(req.body);
    // Asigna el manager
    project.manager = req.user.id;

    try {
      await project.save();

      res.send('Poryecto creado');
    } catch (error) {
      console.log({ error });
    }
  };

  static getAllProjects = async (req: Request, res: Response) => {
    try {
      const projects = await Project.find({
        $or: [
          {
            manager: { $in: req.user.id },
          },
          {
            team: { $in: req.user.id },
          },
        ],
      });
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

      if (project.manager.toString() !== req.user.id.toString() && !project.team.includes(req.user.id)) {
        const error = new Error('Acción no válida');

        return res.status(404).json({ error: error.message });
      }

      res.json(project);
    } catch (error) {
      console.log(error);
    }
  };

  static updateProject = async (req: Request, res: Response) => {
    const { body, project } = req;

    try {
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
    const { project } = req;

    try {
      await project.deleteOne();

      res.send('Poryecto eliminado');
    } catch (error) {
      console.log(error);
    }
  };

  static Project = async (req: Request, res: Response) => {
    const { params, body } = req;

    try {
      res.json({ data: `${this.name} - : httpVerb= ${req.method}`, params, body });
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };
}
