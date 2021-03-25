import { inject, injectable } from 'tsyringe';
import ChatUser from '../infra/typeorm/entities/ChatUser';
import IChatsRepository from '../repositories/IChatsRepository';
import IMessagesRepository from '../repositories/IMessagesRepository';

@injectable()
class ListMessagesService {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,
    @inject('ChatsRepository')
    private chatsRepository: IChatsRepository,
  ) {}

  public async execute(chat_id: string): Promise<ChatUser[]> {
    const findChat = await this.chatsRepository.findById(chat_id);

    if (!findChat) {
      throw new Error('Chat não encontrado.');
    }

    const messgaes = await this.messagesRepository.find(chat_id);

    return this.messagesRepository.orderByDate(messgaes);
  }
}

export default ListMessagesService;
