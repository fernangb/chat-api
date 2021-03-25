import { Router } from 'express';
import sessionsRouter from '../../../../modules/user/infra/http/routes/sessions.routes';
import usersRouter from '../../../../modules/user/infra/http/routes/users.routes';
import chatsRouter from '../../../../modules/chat/infra/http/routes/chats.routes';
import chatUsersRouter from '../../../../modules/chat/infra/http/routes/chatUser.routes';
import messagesRouter from '../../../../modules/chat/infra/http/routes/messages.routes';
import listenersRouter from '../../../../modules/chat/infra/http/routes/listeners.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/chats', chatsRouter);
routes.use('/chat-users', chatUsersRouter);
routes.use('/messages', messagesRouter);
routes.use('/listeners', listenersRouter);

export default routes;
