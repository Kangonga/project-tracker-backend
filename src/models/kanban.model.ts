import { Kanban } from '@app/interfaces/kanban.interface';
import { Schema, model } from 'mongoose';

const kanbanSchema = new Schema<Kanban>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: String, required: true },
  assigneeId: [{ type: String, required: true }],
  projectId: { type: String, required: true },
});

const KanbanModel = model<Kanban>('Kanban', kanbanSchema);

export default KanbanModel;
