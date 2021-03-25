import { Router } from 'express';
import ChatUsersController from '../controllers/ChatUserController';

const chatUsersRouter = Router();

const chatUsersController = new ChatUsersController();

chatUsersRouter.post('/', chatUsersController.create);

chatUsersRouter.get('/:id', chatUsersController.index);

chatUsersRouter.delete('/:id', chatUsersController.delete);

export default chatUsersRouter;
