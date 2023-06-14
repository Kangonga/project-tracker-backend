import { NextFunction, Request, Response } from 'express';
import { MongooseError } from 'mongoose';

interface callbackInterface {
  (req: Request, res: Response, next: NextFunction): Promise<Response>;
}
export const modelAsyncWrapper = (callback: callbackInterface) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      if (error instanceof MongooseError) {
        return res.status(404).json({ err: error.name, data: null });
      }
      if (error instanceof Error) {
        return res.status(404).json({ err: error.message, data: null });
      }
      res.status(404).json({ err: error });
    }
  };
};
