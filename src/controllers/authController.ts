import { Request, Response } from 'express';

import { findAndAuthenticateUser } from '@app/services/auth services/findAndAuthenticateUser';

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await findAndAuthenticateUser(email, password);
  res.json({ msg: 'authenticate user', user });
};
