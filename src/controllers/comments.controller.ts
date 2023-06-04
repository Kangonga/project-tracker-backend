import {
  createOneComment,
  deleteSingleComment,
  findAllComments,
  findComment,
  findCommentById,
  updateSingleComment,
} from '@app/services/comments.service';
import { modelAsyncWrapper } from '@app/wrappers/modelAsyncWrapper';
import { NextFunction, Request, Response } from 'express';

export const getAllComments = modelAsyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { comments } = await findAllComments();
  return res.status(200).json({ data: comments });
});

export const createComment = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { newcomment } = await createOneComment(req.body);
  return res.status(200).json(newcomment);
});

export const getCommentById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { comment } = await findComment('title', String(req.params.id));
  return res.status(200).json(comment);
});

export const updateCommentById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { updatedComment } = await updateSingleComment(String(req.params.id), req.body);
  return res.status(200).json(updatedComment);
});

export const deleteCommentById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { deletedComment } = await deleteSingleComment(String(req.params.id));
  return res.status(200).json({ msg: 'Comment deleted successfuly' });
});
