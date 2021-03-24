import { Router } from 'express';
import sessionsRouter from '../../../../modules/user/infra/http/routes/sessions.routes';
import usersRouter from '../../../../modules/user/infra/http/routes/users.routes';
import chatsRouter from '../../../../modules/chat/infra/http/routes/chats.routes';
import chatUsersRouter from '../../../../modules/chat/infra/http/routes/chatUser.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/chats', chatsRouter);
routes.use('/chat-users', chatUsersRouter);

export default routes;
