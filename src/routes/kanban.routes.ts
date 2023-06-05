import { Router } from 'express';

import {
  createKanban,
  deleteKanbanById,
  getAllKanbans,
  getKanbanById,
  updateKanbanById,
} from '@app/controllers/kanban.controller';
import { verifySessionExists } from '@app/middleware/verifySessionExists';
import { verifyUserRoles } from '@app/middleware/verifyUserRoles';

const kanbanRoutes = Router();

kanbanRoutes.use(verifySessionExists);

kanbanRoutes.route('/').get(getAllKanbans).post(createKanban);
kanbanRoutes.route('/:id').get(getKanbanById).patch(updateKanbanById).delete(verifyUserRoles, deleteKanbanById);

export default kanbanRoutes;
