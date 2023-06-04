import { Request, Response } from 'express';

import {
  createOneUser,
  deleteSingleUser,
  findAllUsers,
  findUserById,
  updateSingleUser,
} from '@app/services/crud operations/user.service';
import { modelAsyncWrapper } from '@app/wrappers/modelAsyncWrapper';

export const getAllUsers = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { users } = await findAllUsers();
  return res.status(200).json({ data: users });
});

export const createUser = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { newuser } = await createOneUser(req.body);
  return res.status(200).json(newuser);
});

export const getUserById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { user } = await findUserById(req.params.id);
  return res.status(200).json(user);
});

export const updateUserById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { updatedUser } = await updateSingleUser(req.params.id, req.body);
  return res.status(200).json(updatedUser);
});

export const deleteUserById = modelAsyncWrapper(async (req: Request, res: Response) => {
  await deleteSingleUser(req.params.id);
  return res.status(200).json({ msg: 'User deleted successfuly' });
});
