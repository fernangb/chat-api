import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../../user/repositories/IUsersRepository';
import ICreateChatUserDTO from '../dtos/ICreateChatUserDTO';
import IChatsRepository from '../repositories/IChatsRepository';
import IChatUsersRepository from '../repositories/IChatUsersRepository';

@injectable()
class CreateChatUserService {
  constructor(
    @inject('ChatsRepository')
    private chatsRepository: IChatsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('ChatUsersRepository')
    private chatUsersRepository: IChatUsersRepository,
  ) {}

  public async execute({
    user_id,
    chat_id,
  }: ICreateChatUserDTO): Promise<void> {
    const findUser = await this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new Error('Usuário não cadastrado');
    }

    const findChat = await this.chatsRepository.findById(chat_id);

    if (!findChat) {
      throw new Error('Chat não cadastrado');
    }

    const userAlreadyInChat = await this.chatUsersRepository.findByUser({
      user_id: findUser.id,
      chat_id: findChat.id,
    });

    if (userAlreadyInChat) {
      throw new Error('Usuário já está no chat');
    }

    if (findChat) {
      await this.chatsRepository.joinChat({ chat: findChat });
    }

    await this.chatUsersRepository.create({
      chat_id,
      user_id,
    });
  }
}

export default CreateChatUserService;
