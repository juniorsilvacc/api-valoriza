import { ensureAuthenticade } from '@shared/infra/http/middlewares/ensureAuthenticade';
import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { ListUserReceiveComplimentsController } from '../controllers/ListUserReceiveComplimentsController';
import { ListUserSendComplimentsController } from '../controllers/ListUserSendComplimentsController';

const routesUsers = Router();

const createUserController = new CreateUserController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();

routesUsers.post('/', createUserController.handle);

routesUsers.get(
  '/compliments/send',
  ensureAuthenticade,
  listUserSendComplimentsController.handle,
);

routesUsers.get(
  '/compliments/receive',
  ensureAuthenticade,
  listUserReceiveComplimentsController.handle,
);

export { routesUsers };
