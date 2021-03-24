import { container } from 'tsyringe';
import '../../modules/user/providers';

import UsersRepository from '../../modules/user/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '../../modules/user/repositories/IUsersRepository';
import IChatsRepository from '../../modules/chat/repositories/IChatsRepository';
import ChatsRepository from '../../modules/chat/infra/typeorm/repositories/ChatsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IChatsRepository>(
  'ChatsRepository',
  ChatsRepository,
);
