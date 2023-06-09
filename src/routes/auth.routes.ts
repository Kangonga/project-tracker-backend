import { Router } from 'express';

import { register, resetPasswordRequest, signIn, signOut } from '@app/controllers/authController';

const authRoutes = Router();

authRoutes.route('/register').post(register);
authRoutes.route('/forgotPassword').post(resetPasswordRequest);
authRoutes.route('/signin').post(signIn);
authRoutes.route('/signout').post(signOut);

export default authRoutes;
