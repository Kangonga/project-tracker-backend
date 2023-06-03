import { Schema, model } from 'mongoose';

import { User } from '@app/features/userFeature/user.interface';

const userSchema = new Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
});

const UserModel = model<User>('User', userSchema);

export default UserModel;
