import { Request, Response } from 'express';

import { findAndAuthenticateUser } from '@app/services/auth services/findAndAuthenticateUser';
import { modelAsyncWrapper } from '@app/wrappers/modelAsyncWrapper';
import { createOneUser } from '@app/services/crud operations/user.service';
import { findAndDeleteSession } from '@app/services/auth services/findAndDeleteSessions';

export const register = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { newuser } = await createOneUser(req.body);
  return res.status(200).json(newuser);
});

export const signIn = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await findAndAuthenticateUser(email, password);
  await findAndDeleteSession(user._id.toString());
  req.session.isAuth = true;
  req.session.userId = user._id.toString();
  return res.status(200).json({ msg: 'user authenticated', user, session: req.session, sessionID: req.session.id });
});

export const signOut = modelAsyncWrapper(async (req: Request, res: Response) => {
  req.session.destroy(err => {
    if (err) throw Error(err);
  });
  return res.status(200).json({ msg: 'success. user logged out' });
});
