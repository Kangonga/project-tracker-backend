import { NextFunction, Request, Response } from 'express';

import { findUserById } from '@app/services/crud operations/user.service';

export const verifyUserRoles = async (req: Request, res: Response, next: NextFunction) => {
  const { user } = await findUserById(req.params.userId);
  if (user.role !== 'admin') {
    throw Error('Unauthorized: Invalid permissions');
  }
  next();
};
