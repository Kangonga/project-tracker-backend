import { Router } from 'express';

import {
  createComment,
  deleteCommentById,
  getAllComments,
  getCommentById,
  updateCommentById,
} from '@app/controllers/comments.controller';
import { verifySessionExists } from '@app/middleware/verifySessionExists';
import { verifyUserRoles } from '@app/middleware/verifyUserRoles';

const commentRoutes = Router();

commentRoutes.use(verifySessionExists);

commentRoutes.route('/').get(getAllComments).post(createComment);
commentRoutes.route('/:id').get(getCommentById).patch(updateCommentById).delete(verifyUserRoles, deleteCommentById);

export default commentRoutes;
