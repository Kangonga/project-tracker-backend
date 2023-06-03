import {
  createComment,
  deleteCommentById,
  getAllComments,
  getCommentById,
  updateCommentById,
} from '@app/controllers/comments.controller';
import { Router } from 'express';

const commentRoutes = Router();

commentRoutes.route('/').get(getAllComments).post(createComment);
commentRoutes.route('/:id').get(getCommentById).patch(updateCommentById).delete(deleteCommentById);

export default commentRoutes;
