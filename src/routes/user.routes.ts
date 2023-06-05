import { Router } from 'express';

import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '@app/controllers/user.controller';
import { verifySessionExists } from '@app/middleware/verifySessionExists';

const userRoutes = Router();

userRoutes.use(verifySessionExists);

userRoutes.route('/').get(getAllUsers).post(createUser);
userRoutes.route('/:id').get(getUserById).patch(updateUserById).delete(deleteUserById);

export default userRoutes;
