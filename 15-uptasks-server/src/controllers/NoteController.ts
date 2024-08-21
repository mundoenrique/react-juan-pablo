import type { Request, Response } from 'express';
import Note, { INote } from '../models/Note';
import { Types } from 'mongoose';

type NoteParams = {
  noteId: Types.ObjectId;
};

export class NoteController {
  static createNote = async (req: Request<{}, {}, INote>, res: Response) => {
    const { body, user, task } = req;
    const { content } = body;

    const note = new Note();
    note.content = content;
    note.createdBy = user.id;
    note.task = task.id;
    task.notes.push(note.id);

    try {
      await Promise.allSettled([req.task.save(), note.save()]);
      res.send('Nota Creada Correctamente');
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error' });
    }
  };
}
