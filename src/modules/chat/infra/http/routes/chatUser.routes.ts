import { Router } from 'express';
import ChatUsersController from '../controllers/ChatUserController';

const chatUsersRouter = Router();

const chatUsersController = new ChatUsersController();

chatUsersRouter.post('/', chatUsersController.create);

export default chatUsersRouter;
