import { Router } from 'express';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';

const routesAuthenticate = Router();

const authenticateUserController = new AuthenticateUserController();

routesAuthenticate.post('/', authenticateUserController.handle);

export { routesAuthenticate };
