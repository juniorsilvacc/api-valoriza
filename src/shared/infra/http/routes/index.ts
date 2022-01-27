import { routesUsers } from '@modules/users/infra/http/routes/users.routes';
import { Router } from 'express';

const router = Router();

router.use('/users', routesUsers);

export { router };
