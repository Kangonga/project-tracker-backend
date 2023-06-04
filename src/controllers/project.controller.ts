import {
  createOneProject,
  deleteSingleProject,
  findAllProjects,
  findProject,
  findProjectById,
  updateSingleProject,
} from '@app/services/project.service';
import { modelAsyncWrapper } from '@app/wrappers/modelAsyncWrapper';
import { NextFunction, Request, Response } from 'express';

export const getAllProjects = modelAsyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { projects } = await findAllProjects();
  return res.status(200).json({ data: projects });
});

export const createProject = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { newproject } = await createOneProject(req.body);
  return res.status(200).json(newproject);
});

export const getProjectById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { project } = await findProject('title', String(req.params.id));
  return res.status(200).json(project);
});

export const updateProjectById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { updatedProject } = await updateSingleProject(String(req.params.id), req.body);
  return res.status(200).json(updatedProject);
});

export const deleteProjectById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { deletedProject } = await deleteSingleProject(String(req.params.id));
  return res.status(200).json({ msg: 'Project deleted successfuly' });
});
