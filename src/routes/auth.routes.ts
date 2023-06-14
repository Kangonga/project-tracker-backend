import { Router } from 'express';

import {
  isLoggedIn,
  register,
  resetPassword,
  resetPasswordRequest,
  signIn,
  signOut,
  verifyToken,
} from '@app/controllers/authController';
import { verifySessionExists } from '@app/middleware/verifySessionExists';

const authRoutes = Router();
authRoutes.route('/isLoggedIn').post(isLoggedIn);
authRoutes.route('/register').post(register);
authRoutes.route('/forgotPassword').post(resetPasswordRequest);
authRoutes.route('/verifyToken').post(verifySessionExists, verifyToken);
authRoutes.route('/resetPassword').post(verifySessionExists, resetPassword);
authRoutes.route('/signin').post(signIn);
authRoutes.route('/signout').post(signOut);

export default authRoutes;
