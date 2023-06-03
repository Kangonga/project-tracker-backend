import {
  createProject,
  deleteProjectById,
  getAllProjects,
  getProjectById,
  updateProjectById,
} from '@app/controllers/project.controller';
import { Router } from 'express';

const projectRoutes = Router();

projectRoutes.route('/').get(getAllProjects).post(createProject);
projectRoutes.route('/:id').get(getProjectById).patch(updateProjectById).delete(deleteProjectById);

export default projectRoutes;
