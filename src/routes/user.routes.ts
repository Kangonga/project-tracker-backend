import { Router } from 'express';

import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '@app/controllers/user.controller';
import { verifySessionExists } from '@app/middleware/verifySessionExists';
import { verifyUserRoles } from '@app/middleware/verifyUserRoles';

const userRoutes = Router();

userRoutes.use(verifySessionExists);

userRoutes.route('/').get(getAllUsers).post(verifyUserRoles, createUser);
userRoutes.route('/:id').get(getUserById).patch(updateUserById).delete(verifyUserRoles, deleteUserById);

export default userRoutes;
