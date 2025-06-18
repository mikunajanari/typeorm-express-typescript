import { Router } from 'express';

import auth from './auth';
import posts from './post';
import users from './users';

const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/post', posts);

export default router;
