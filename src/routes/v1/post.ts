import { Router } from 'express';
import { list, show, create, update, destroy } from 'controllers/posts';
import { checkJwt } from 'middleware/checkJwt';
import { checkRole } from 'middleware/checkRole';

const router = Router();

router.get('/', [checkJwt], list);
router.get('/:id([0-9]+)', [checkJwt], show);
router.post('/', [checkJwt, checkRole(['ADMINISTRATOR'])], create);
router.put('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'])], update);
router.delete('/:id([0-9]+)', [checkJwt, checkRole(['ADMINISTRATOR'])], destroy);

export default router;