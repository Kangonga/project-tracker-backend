import { NextFunction, Request, Response } from 'express';

import { findUserById } from '@app/services/crud operations/user.service';
import { middlewareAsyncWrapper } from '@app/wrappers/middlewareAyncWrapper';

export const verifyUserRoles = middlewareAsyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { user } = await findUserById(req.session.userId as string);
  if (user.role !== 'admin') {
    throw Error('Unauthorized: Invalid permissions');
  }
  next();
});
