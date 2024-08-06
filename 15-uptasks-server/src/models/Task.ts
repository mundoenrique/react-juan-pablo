import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  name: string;
  description: string;
}

const taskSchema: Schema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
});

const Task = mongoose.model<ITask>('Task', taskSchema);
export default Task;
