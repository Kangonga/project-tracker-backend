import { Schema, model } from 'mongoose';

import { resetPasswordTokenInterface } from '@app/interfaces/resetPasswordToken.interface';

const resetPasswordTokenSchema = new Schema<resetPasswordTokenInterface>({
  token: { type: String },
  email: { type: String, required: true },
  expireAt: { type: Date, expires: 600, default: Date.now },
});

const ResetPasswordTokenModel = model<resetPasswordTokenInterface>('PasswordToken', resetPasswordTokenSchema);

export default ResetPasswordTokenModel;
