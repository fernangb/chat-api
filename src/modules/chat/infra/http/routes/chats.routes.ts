import { Router } from 'express';
import ChatsController from '../controllers/ChatsController';

const chatsRouter = Router();

const chatsController = new ChatsController();

chatsRouter.post('/', chatsController.create);
chatsRouter.get('/', chatsController.index);

export default chatsRouter;
