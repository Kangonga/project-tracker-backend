import { User } from '@app/interfaces/user.interface';
import UserModel from '@app/models/user.model';

export const findAllUsers = async () => {
  const users = await UserModel.find();
  return { users };
};

export const createOneUser = async (user: User) => {
  const newuser = await UserModel.create(user);
  if (!(newuser instanceof UserModel)) {
    throw Error('User was not created');
  }
  return { newuser };
};

export const findUserById = async (id: string) => {
  const user = await UserModel.findOne({ _id: id });
  if (!user) {
    throw Error('User not found');
  }
  return { user };
};

export const findUser = async (field: string, value: string) => {
  const user = await UserModel.findOne({ field: value });
  if (!user) {
    throw Error('User not found');
  }
  return { user };
};

export const updateSingleUser = async (userID: string, user: User) => {
  const filter = { _id: userID };
  const updatedUser = await UserModel.findOneAndUpdate(filter, user, {
    new: true,
    runValidators: true,
  });
  if (!updatedUser) {
    throw Error('User not found');
  }
  return { updatedUser };
};

export const deleteSingleUser = async (userID: string) => {
  const filter = { _id: userID };
  const deletedUser = await UserModel.findOneAndDelete(filter);
  if (!deletedUser) {
    throw Error('User not found');
  }
  return { deletedUser };
};
