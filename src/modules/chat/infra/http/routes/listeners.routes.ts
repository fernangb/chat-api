import { Router } from 'express';
import ListenersController from '../controllers/ListenersController';

const listenersRouter = Router();

const listenersController = new ListenersController();

listenersRouter.post('/', listenersController.create);

listenersRouter.get('/:id', listenersController.index);

listenersRouter.delete('/:id', listenersController.delete);

export default listenersRouter;
