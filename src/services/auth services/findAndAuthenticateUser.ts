import { compare } from 'bcrypt';

import UserModel from '@app/models/user.model';

export const findAndAuthenticateUser = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw Error('Invalid email');
  }
  const doPasswordsMatch = await compare(password, user.password);
  if (!doPasswordsMatch) {
    throw Error('Invalid Password');
  }
  return user;
};
