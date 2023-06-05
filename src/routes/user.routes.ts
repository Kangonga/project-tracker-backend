import { Router } from 'express';

import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '@app/controllers/user.controller';

const userRoutes = Router();

userRoutes.route('/').get(getAllUsers).post(createUser);
userRoutes.route('/:id').get(getUserById).patch(updateUserById).delete(deleteUserById);

export default userRoutes;
