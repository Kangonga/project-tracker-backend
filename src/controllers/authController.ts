import { Request, Response } from 'express';

import { findAndAuthenticateUser } from '@app/services/auth services/findAndAuthenticateUser';
import { modelAsyncWrapper } from '@app/wrappers/modelAsyncWrapper';

export const signIn = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await findAndAuthenticateUser(email, password);
  req.session.isAuth = true;
  return res.status(200).json({ msg: 'user authenticated', user, session: req.session, sessionID: req.session.id });
});

export const signOut = modelAsyncWrapper(async (req: Request, res: Response) => {
  req.session.destroy(err => {
    if (err) throw Error(err);
  });
  return res.status(200).json({ msg: 'success. user logged out' });
});
