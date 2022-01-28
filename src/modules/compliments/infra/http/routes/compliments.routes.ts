import { Router } from 'express';
import { CreateComplimentController } from '../controllers/CreateComplimentController';

const routesCompliments = Router();

const createComplimentController = new CreateComplimentController();

routesCompliments.post('/', createComplimentController.handle);

export { routesCompliments };
