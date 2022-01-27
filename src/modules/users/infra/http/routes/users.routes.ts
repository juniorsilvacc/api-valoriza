import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';

const routesUsers = Router();

const createUserController = new CreateUserController();

routesUsers.post('/', createUserController.handle);

export { routesUsers };
