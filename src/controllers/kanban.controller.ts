import { Request, Response } from 'express';

import {
  createOneKanban,
  deleteSingleKanban,
  findAllKanbans,
  findKanbanById,
  updateSingleKanban,
} from '@app/services/crud operations/kanban.service';
import { modelAsyncWrapper } from '@app/wrappers/modelAsyncWrapper';

export const getAllKanbans = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { kanbans } = await findAllKanbans();
  return res.status(200).json({ data: kanbans });
});

export const createKanban = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { newkanban } = await createOneKanban(req.body);
  return res.status(200).json(newkanban);
});

export const getKanbanById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { kanban } = await findKanbanById(req.params.id);
  return res.status(200).json(kanban);
});

export const updateKanbanById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { updatedKanban } = await updateSingleKanban(req.params.id, req.body);
  return res.status(200).json(updatedKanban);
});

export const deleteKanbanById = modelAsyncWrapper(async (req: Request, res: Response) => {
  await deleteSingleKanban(req.params.id);
  return res.status(200).json({ msg: 'Kanban deleted successfuly' });
});
