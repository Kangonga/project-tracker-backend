import { Router } from 'express';

import { createBug, deleteBugById, getAllBugs, getBugById, updateBugById } from '@app/controllers/bugs.controller';
import { verifySessionExists } from '@app/middleware/verifySessionExists';

const bugRoutes = Router();

bugRoutes.use(verifySessionExists);

bugRoutes.route('/').get(getAllBugs).post(createBug);
bugRoutes.route('/:id').get(getBugById).patch(updateBugById).delete(deleteBugById);

export default bugRoutes;
