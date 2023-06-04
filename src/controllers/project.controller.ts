import { Request, Response } from 'express';

import {
  createOneProject,
  deleteSingleProject,
  findAllProjects,
  findProjectById,
  updateSingleProject,
} from '@app/services/crud operations/project.service';
import { modelAsyncWrapper } from '@app/wrappers/modelAsyncWrapper';

export const getAllProjects = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { projects } = await findAllProjects();
  return res.status(200).json({ data: projects });
});

export const createProject = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { newproject } = await createOneProject(req.body);
  return res.status(200).json(newproject);
});

export const getProjectById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { project } = await findProjectById(req.params.id);
  return res.status(200).json(project);
});

export const updateProjectById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { updatedProject } = await updateSingleProject(req.params.id, req.body);
  return res.status(200).json(updatedProject);
});

export const deleteProjectById = modelAsyncWrapper(async (req: Request, res: Response) => {
  await deleteSingleProject(req.params.id);
  return res.status(200).json({ msg: 'Project deleted successfuly' });
});
