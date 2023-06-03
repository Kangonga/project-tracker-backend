import { createBug, deleteBugById, getAllBugs, getBugById, updateBugById } from '@app/controllers/bugs.controller';
import { Router } from 'express';

const bugRoutes = Router();

bugRoutes.route('/').get(getAllBugs).post(createBug);
bugRoutes.route('/:id').get(getBugById).patch(updateBugById).delete(deleteBugById);

export default bugRoutes;
