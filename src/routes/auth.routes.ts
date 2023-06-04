import { Router } from 'express';

import { signIn } from '@app/controllers/authController';

const authRoutes = Router();

authRoutes.route('/signin').post(signIn);
