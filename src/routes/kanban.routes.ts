import {
  createKanban,
  deleteKanbanById,
  getAllKanbans,
  getKanbanById,
  updateKanbanById,
} from '@app/controllers/kanban.controller';
import { Router } from 'express';

const kanbanRoutes = Router();

kanbanRoutes.route('/').get(getAllKanbans).post(createKanban);
kanbanRoutes.route('/:id').get(getKanbanById).patch(updateKanbanById).delete(deleteKanbanById);

export default kanbanRoutes;
