import { Request, Response } from 'express';

import { findAndAuthenticateUser } from '@app/services/auth services/findAndAuthenticateUser';
import { modelAsyncWrapper } from '@app/wrappers/modelAsyncWrapper';
import { createOneUser, findUser, findUserById } from '@app/services/crud operations/user.service';
import { findAndDeleteSession } from '@app/services/auth services/findAndDeleteSessions';
import { sendEmail } from '@app/services/auth services/sendEmail';
import { createToken } from '@app/services/auth services/createToken';
import { findAndVerifyToken } from '@app/services/auth services/findAndVerifyToken';

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
  res.clearCookie('connect.sid');
  return res.status(200).json({ msg: 'success. user logged out' });
});

export const resetPasswordRequest = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { email } = req.body;
  const { user } = await findUser('email', email);
  const { newToken } = await createToken(email);
  req.session.userId = user._id;
  sendEmail(email, newToken.token);
  return res.status(200).json({ msg: 'token sent to the provided email' });
});

export const verifyToken = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { token } = req.body;
  const { user } = await findUserById(req.session.userId as string);
  await findAndVerifyToken(token, user.email);
  return res.status(200).json({ msg: 'valid token' });
});

export const resetPassword = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    throw Error('Passwords do not match');
  }
  const { user } = await findUserById(req.session.userId as string);
  user.password = password;
  return res.status(200).json({ msg: 'success. password updated' });
});
