import { Schema, model } from 'mongoose';

import { Kanban } from '@app/features/kanbanFeature/kanban.interface';

const kanbanSchema = new Schema<Kanban>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: String, required: true },
  assigneeId: [{ type: String, required: true }],
  projectId: { type: String, required: true },
});

const KanbanModel = model<Kanban>('Kanban', kanbanSchema);

export default KanbanModel;
