import { randomUUID } from 'crypto';

import { hash } from 'bcrypt';

import ResetPasswordTokenModel from '@app/models/resetPasswordToken.model';

export const createToken = async (email: string) => {
  const token = randomUUID().toString().substring(0, 5);
  const hashedToken = await hash(token, 10);
  const newToken = await ResetPasswordTokenModel.create({ email, token: hashedToken });
  return { newToken, hashedToken, token };
};
