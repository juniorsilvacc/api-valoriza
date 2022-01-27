import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';
import { Router } from 'express';
import { CreateTagController } from '../controllers/CreateTagController';

const routesTags = Router();

const createTagController = new CreateTagController();

routesTags.post('/', ensureAdmin, createTagController.handle);

export { routesTags };
