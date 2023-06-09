import { Schema, model } from 'mongoose';

import { resetPasswordTokenInterface } from '@app/interfaces/resetPasswordToken.interface';

const resetPasswordTokenSchema = new Schema<resetPasswordTokenInterface>({
  token: { type: String },
  email: { type: String, required: true },
  expireAt: { type: Date, expires: Date.now() + 10 * 60 * 1000, default: Date.now() + 10 * 60 * 1000 },
});

const ResetPasswordTokenModel = model<resetPasswordTokenInterface>('PasswordToken', resetPasswordTokenSchema);

export default ResetPasswordTokenModel;
