import { ensureAuthenticade } from '@shared/infra/http/middlewares/ensureAuthenticade';
import { Router } from 'express';
import { CreateComplimentController } from '../controllers/CreateComplimentController';

const routesCompliments = Router();

const createComplimentController = new CreateComplimentController();

routesCompliments.post(
  '/',
  ensureAuthenticade,
  createComplimentController.handle,
);

export { routesCompliments };
