import { Router } from 'express';
import { CreateTagController } from '../controllers/CreateTagController';

const routesTags = Router();

const createTagController = new CreateTagController();

routesTags.post('/', createTagController.handle);

export { routesTags };
