import { Router } from 'express';
import ChatByIdController from '../controllers/ChatByIdController';
import ChatsController from '../controllers/ChatsController';

const chatsRouter = Router();

const chatsController = new ChatsController();
const chatByIdController = new ChatByIdController();

chatsRouter.post('/', chatsController.create);
chatsRouter.get('/', chatsController.index);
chatsRouter.get('/:id', chatByIdController.index);

export default chatsRouter;
