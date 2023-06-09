import { NextFunction, Request, Response } from 'express';
import { MongooseError } from 'mongoose';

interface callbackInterface {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}
export const middlewareAsyncWrapper = (callback: callbackInterface) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      if (error instanceof MongooseError) {
        return res.status(404).json({ err: error.name });
      }
      if (error instanceof Error) {
        return res.status(404).json({ err: error.message });
      }
      res.status(404).json({ err: error });
    }
  };
};
