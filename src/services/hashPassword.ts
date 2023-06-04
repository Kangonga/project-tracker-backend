import { genSalt, hash } from 'bcrypt';

import { User } from '@app/interfaces/user.interface';

export async function hashPassword(this: User) {
  if (this.isModified('password')) {
    const salt = await genSalt(10);
    const hashedPassword = await hash(this.password, salt);
    this.password = hashedPassword;
  }
}
