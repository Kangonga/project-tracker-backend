import { NextFunction, Request, Response } from 'express';

export const verifySessionExists = async (req: Request, res: Response, next: NextFunction) => {
  const sessionId = req.sessionID;
  if (!sessionId) {
    return res.status(401).json({ err: 'Unauthorized. Invalid session' });
  }
  next();
};
