import { Request, Response } from 'express';

import { findAndAuthenticateUser } from '@app/services/auth services/findAndAuthenticateUser';
import { modelAsyncWrapper } from '@app/wrappers/modelAsyncWrapper';

export const signIn = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await findAndAuthenticateUser(email, password);
  return res.json({ msg: 'user authenticated', user });
});
