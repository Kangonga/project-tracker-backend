import { Router } from 'express';

import { createBug, deleteBugById, getAllBugs, getBugById, updateBugById } from '@app/controllers/bugs.controller';
import { verifySessionExists } from '@app/middleware/verifySessionExists';
import { verifyUserRoles } from '@app/middleware/verifyUserRoles';

const bugRoutes = Router();

bugRoutes.use(verifySessionExists);

bugRoutes.route('/').get(getAllBugs).post(createBug);
bugRoutes.route('/:id').get(getBugById).patch(updateBugById).delete(verifyUserRoles, deleteBugById);

export default bugRoutes;
