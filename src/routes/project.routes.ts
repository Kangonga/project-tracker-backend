import { Router } from 'express';

import {
  createProject,
  deleteProjectById,
  getAllProjects,
  getProjectById,
  updateProjectById,
} from '@app/controllers/project.controller';

const projectRoutes = Router();

projectRoutes.route('/').get(getAllProjects).post(createProject);
projectRoutes.route('/:id').get(getProjectById).patch(updateProjectById).delete(deleteProjectById);

export default projectRoutes;
