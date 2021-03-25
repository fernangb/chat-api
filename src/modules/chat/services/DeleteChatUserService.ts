import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../../user/repositories/IUsersRepository';
import ICreateChatUserDTO from '../dtos/ICreateChatUserDTO';
import IChatsRepository from '../repositories/IChatsRepository';
import IChatUsersRepository from '../repositories/IChatUsersRepository';

@injectable()
class DeleteChatUserService {
  constructor(
    @inject('ChatUsersRepository')
    private chatUsersRepository: IChatUsersRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('ChatsRepository')
    private chatsRepository: IChatsRepository,
  ) {}

  public async execute({
    user_id,
    chat_id,
  }: ICreateChatUserDTO): Promise<void> {
    const findUser = await this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new Error('Usuário não encontrado');
    }

    const findChat = await this.chatsRepository.findById(chat_id);

    if (!findChat) {
      throw new Error('Chat não encontrado');
    }

    const chatUser = await this.chatUsersRepository.findByChat(chat_id);

    if (!chatUser) {
      throw new Error('Usuário não encontrado no chat');
    }

    await this.chatsRepository.goOutChat({ chat: findChat });

    await this.chatUsersRepository.delete(chatUser.id);
  }
}

export default DeleteChatUserService;
