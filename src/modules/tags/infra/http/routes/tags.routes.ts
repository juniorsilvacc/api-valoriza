import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';
import { ensureAuthenticade } from '@shared/infra/http/middlewares/ensureAuthenticade';
import { Router } from 'express';
import { CreateTagController } from '../controllers/CreateTagController';

const routesTags = Router();

const createTagController = new CreateTagController();

routesTags.post(
  '/',
  ensureAuthenticade,
  ensureAdmin,
  createTagController.handle,
);

export { routesTags };
