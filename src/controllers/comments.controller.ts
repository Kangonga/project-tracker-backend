import { Request, Response } from 'express';

import { modelAsyncWrapper } from '@app/wrappers/modelAsyncWrapper';
import {
  createOneComment,
  deleteSingleComment,
  findAllComments,
  findCommentById,
  updateSingleComment,
} from '@app/services/crud operations/comments.service';

export const getAllComments = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { comments } = await findAllComments();
  return res.status(200).json({ data: comments });
});

export const createComment = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { newcomment } = await createOneComment(req.body);
  return res.status(200).json(newcomment);
});

export const getCommentById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { comment } = await findCommentById(req.params.id);
  return res.status(200).json(comment);
});

export const updateCommentById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { updatedComment } = await updateSingleComment(req.params.id, req.body);
  return res.status(200).json(updatedComment);
});

export const deleteCommentById = modelAsyncWrapper(async (req: Request, res: Response) => {
  await deleteSingleComment(req.params.id);
  return res.status(200).json({ msg: 'Comment deleted successfuly' });
});
