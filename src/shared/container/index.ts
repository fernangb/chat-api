import { container } from 'tsyringe';
import '../../modules/user/providers';

import UsersRepository from '../../modules/user/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '../../modules/user/repositories/IUsersRepository';
import IChatsRepository from '../../modules/chat/repositories/IChatsRepository';
import ChatsRepository from '../../modules/chat/infra/typeorm/repositories/ChatsRepository';
import IChatUsersRepository from '../../modules/chat/repositories/IChatUsersRepository';
import ChatUsersRepository from '../../modules/chat/infra/typeorm/repositories/ChatUsersRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IChatsRepository>(
  'ChatsRepository',
  ChatsRepository,
);

container.registerSingleton<IChatUsersRepository>(
  'ChatUsersRepository',
  ChatUsersRepository,
);
