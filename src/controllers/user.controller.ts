import {
  createOneUser,
  deleteSingleUser,
  findAllUsers,
  findUser,
  findUserById,
  updateSingleUser,
} from '@app/services/user.service';
import { modelAsyncWrapper } from '@app/wrappers/trycatch';
import { NextFunction, Request, Response } from 'express';

export const getAllUsers = modelAsyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const { users } = await findAllUsers();
  return res.status(200).json({ data: users });
});

export const createUser = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { newuser } = await createOneUser(req.body);
  return res.status(200).json(newuser);
});

export const getUserById = modelAsyncWrapper(async (req: Request, res: Response) => {
  const { user } = await findUser('title', String(req.params.id));
  return res.status(200).json(user);
});

export const updateUserById = async (req: Request, res: Response) => {
  const { updatedUser } = await updateSingleUser(String(req.params.id), req.body);
  return res.status(200).json(updatedUser);
};

export const deleteUserById = async (req: Request, res: Response) => {
  const { deletedUser } = await deleteSingleUser(String(req.params.id));
  return res.status(200).json({ msg: 'User deleted successfuly' });
};
