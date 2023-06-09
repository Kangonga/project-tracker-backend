import { Schema, model } from 'mongoose';

import { resetPasswordTokenInterface } from '@app/interfaces/resetPasswordToken.interface';

const resetPasswordTokenSchema = new Schema<resetPasswordTokenInterface>({
  token: { type: String },
  email: { type: String, required: true },
  expires: { type: Date, expires: '10m' },
});

const ResetPasswordTokenModel = model<resetPasswordTokenInterface>('PasswordToken', resetPasswordTokenSchema);

export default ResetPasswordTokenModel;
