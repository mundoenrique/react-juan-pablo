import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ITask extends Document {
  name: string;
  description: string;
  project: Types.ObjectId;
}

const taskSchema: Schema = new Schema(
  {
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
    porject: {
      type: Types.ObjectId,
      ref: 'Project',
    },
  },
  { timestamps: true }
);

const Task = mongoose.model<ITask>('Task', taskSchema);
export default Task;
