import { Router } from 'express';

import { signIn, signOut } from '@app/controllers/authController';

const authRoutes = Router();

authRoutes.route('/signin').post(signIn);
authRoutes.route('/signout').post(signOut);

export default authRoutes;
