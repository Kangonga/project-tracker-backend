import { NextFunction, Request, Response } from 'express';

export const verifySessionExists = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.session.userId;
  if (!userId) {
    return res.status(401).json({ err: 'Unauthorized. Invalid session' });
  }
  next();
};
