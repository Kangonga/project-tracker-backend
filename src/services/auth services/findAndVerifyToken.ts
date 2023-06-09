import { hash } from 'bcrypt';

import ResetPasswordTokenModel from '@app/models/resetPasswordToken.model';

export const findAndVerifyToken = async (token: string, email: string) => {
  const hashedToken = await hash(token, 10);
  const storedToken = await ResetPasswordTokenModel.findOne({ token: hashedToken });
  if (!storedToken || storedToken.email !== email) {
    throw new Error('Invalid or expired token');
  }
  return true;
};
