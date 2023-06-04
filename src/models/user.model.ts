import { Schema, model } from 'mongoose';

import { User } from '@app/interfaces/user.interface';
import { hashPassword } from '@app/services/hashPassword';

const userSchema = new Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre('save', hashPassword);

const UserModel = model<User>('User', userSchema);

export default UserModel;
