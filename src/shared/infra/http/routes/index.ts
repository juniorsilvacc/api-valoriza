import { routesTags } from '@modules/tags/infra/http/routes/tags.routes';
import { routesUsers } from '@modules/users/infra/http/routes/users.routes';
import { Router } from 'express';

const router = Router();

router.use('/users', routesUsers);
router.use('/tags', routesTags);

export { router };
