import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';
import { ensureAuthenticade } from '@shared/infra/http/middlewares/ensureAuthenticade';
import { Router } from 'express';
import { CreateTagController } from '../controllers/CreateTagController';
import { ListTagsController } from '../controllers/ListTagsController';

const routesTags = Router();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

routesTags.post(
  '/',
  ensureAuthenticade,
  ensureAdmin,
  createTagController.handle,
);

routesTags.get('/', ensureAuthenticade, ensureAdmin, listTagsController.handle);

export { routesTags };
