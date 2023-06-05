import { Router } from 'express';

import {
  createProject,
  deleteProjectById,
  getAllProjects,
  getProjectById,
  updateProjectById,
} from '@app/controllers/project.controller';
import { verifySessionExists } from '@app/middleware/verifySessionExists';
import { verifyUserRoles } from '@app/middleware/verifyUserRoles';

const projectRoutes = Router();

projectRoutes.use([verifySessionExists, verifyUserRoles]);

projectRoutes.route('/').get(getAllProjects).post(createProject);
projectRoutes.route('/:id').get(getProjectById).patch(updateProjectById).delete(deleteProjectById);

export default projectRoutes;
