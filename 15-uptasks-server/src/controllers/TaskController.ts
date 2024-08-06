import type { Request, Response } from 'express';

export class TaskController {
  static CreateTask = async (req: Request, res: Response) => {
    const {} = req.body;
    const {} = req.params;

    try {
      res.json({ data: `CreateTask method: ${req.method}`, body: req.body, params: req.params });
    } catch (error) {
      console.log(error);
    }
  };

  static Task = async (req: Request, res: Response) => {
    const {} = req.body;
    const {} = req.params;

    try {
      res.json({ data: `... Task Method: ${req.method}`, body: req.body, params: req.params });
    } catch (error) {
      console.log(error);
    }
  };
}
