import {
  createOneBug,
  deleteSingleBug,
  findAllBugs,
  findBug,
  findBugById,
  updateSingleBug,
} from '@app/services/bugs.service';
import { modelAsyncWrapper } from '@app/wrappers/trycatch';
import { NextFunction, Request, Response } from 'express';

export const getAllBugs = modelAsyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { bugs } = await findAllBugs();
  return res.status(200).json({ data: bugs });
});

export const createBug = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { newbug } = await createOneBug(req.body);
  return res.status(200).json(newbug);
});

export const getBugById = modelAsyncWrapper(async (req: Request, res: Response) => {
  // const { bug } = await findBugById(String(req.params.id));
  const { bug } = await findBug('title', String(req.params.id));
  return res.status(200).json(bug);
});

export const updateBugById = async (req: Request, res: Response) => {
  const { updatedBug } = await updateSingleBug(String(req.params.id), req.body);
  return res.status(200).json(updatedBug);
};

export const deleteBugById = async (req: Request, res: Response) => {
  const { deletedBug } = await deleteSingleBug(String(req.params.id));
  return res.status(200).json({ msg: 'Bug deleted successfuly' });
};
