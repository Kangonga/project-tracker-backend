import { Request, Response } from 'express';

import {
  createOneBug,
  deleteSingleBug,
  findAllBugs,
  findBugById,
  updateSingleBug,
} from '@app/services/crud operations/bugs.service';
import { modelAsyncWrapper } from '@app/wrappers/modelAsyncWrapper';

export const getAllBugs = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { bugs } = await findAllBugs();
  return res.status(200).json({ data: bugs });
});

export const createBug = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { newbug } = await createOneBug(req.body);
  return res.status(200).json(newbug);
});

export const getBugById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { bug } = await findBugById(req.params.id);
  return res.status(200).json(bug);
});

export const updateBugById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { updatedBug } = await updateSingleBug(req.params.id, req.body);
  return res.status(200).json(updatedBug);
});

export const deleteBugById = modelAsyncWrapper(async (req: Request, res: Response) => {
  await deleteSingleBug(req.params.id);
  return res.status(200).json({ msg: 'Bug deleted successfuly' });
});
