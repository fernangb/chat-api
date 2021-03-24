import { Router } from 'express';
import sessionsRouter from '../../../../modules/user/infra/http/routes/sessions.routes';
import usersRouter from '../../../../modules/user/infra/http/routes/users.routes';
import chatsRouter from '../../../../modules/chat/infra/http/routes/chats.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/chats', chatsRouter);

export default routes;
