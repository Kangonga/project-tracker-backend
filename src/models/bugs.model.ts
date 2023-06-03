import { Bug } from '@app/interfaces/bugs.interface';
import { Schema, model } from 'mongoose';

const bugSchema = new Schema<Bug>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, required: true },
  reportedById: { type: String, required: true },
  assigneeId: { type: String, required: true },
  closedById: { type: String, required: true },
  createdAt: { type: String, required: true },
  closedAt: { type: String, required: true },
});

const BugModel = model<Bug>('Bug', bugSchema);

export default BugModel;
