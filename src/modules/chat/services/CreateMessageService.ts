import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../../user/repositories/IUsersRepository';
import ICreateMessageDTO from '../dtos/ICreateMessageDTO';
import Message from '../infra/typeorm/entities/Message';
import IChatsRepository from '../repositories/IChatsRepository';
import IChatUsersRepository from '../repositories/IChatUsersRepository';
import IMessagesRepository from '../repositories/IMessagesRepository';

@injectable()
class CreateMessageService {
  constructor(
    @inject('ChatsRepository')
    private chatsRepository: IChatsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('ChatUsersRepository')
    private chatUsersRepository: IChatUsersRepository,
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
  ) {}

  public async execute({
    chat_id,
    user_id,
    text,
  }: ICreateMessageDTO): Promise<Message> {
    const findUser = await this.usersRepository.findById(user_id);

    if (!findUser) {
      throw new Error('Usuário não encontrado.');
    }

    const findChat = await this.chatsRepository.findById(chat_id);

    if (!findChat) {
      throw new Error('Chat não encontrado.');
    }

    const findChatUser = await this.chatUsersRepository.findByUser({
      chat_id,
      user_id,
    });

    if (!findChatUser) {
      throw new Error('Usuário não está no chat.');
    }

    const message = await this.messagesRepository.create({
      chat_id,
      user_id,
      text,
    });

    return message;
  }
}

export default CreateMessageService;
