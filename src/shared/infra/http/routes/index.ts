import { Router } from 'express';
import sessionsRouter from '../../../../modules/user/infra/http/routes/sessions.routes';
import usersRouter from '../../../../modules/user/infra/http/routes/users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
