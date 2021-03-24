import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../../user/repositories/IUsersRepository';
import ICreateChatDTO from '../dtos/ICreateChatDTO';
import Chat from '../infra/typeorm/entities/Chat';
import IChatsRepository from '../repositories/IChatsRepository';
import IChatUsersRepository from '../repositories/IChatUsersRepository';

@injectable()
class CreateChatService {
  constructor(
    @inject('ChatsRepository')
    private chatsRepository: IChatsRepository,
    @inject('ChatUsersRepository')
    private chatUsersRepository: IChatUsersRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ chat_name, user_id }: ICreateChatDTO): Promise<Chat> {
    const findUser = await this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new Error('Usuário não encontrado.');
    }

    const chat = await this.chatsRepository.create({
      chat_name,
      user_id: findUser.id,
    });

    await this.chatUsersRepository.create({
      chat_id: chat.id,
      user_id: findUser.id,
    });

    return chat;
  }
}

export default CreateChatService;
