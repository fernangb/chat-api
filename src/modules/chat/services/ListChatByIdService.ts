import { inject, injectable } from 'tsyringe';
import Chat from '../infra/typeorm/entities/Chat';
import IChatsRepository from '../repositories/IChatsRepository';

@injectable()
class ListChatByIdService {
  constructor(
    @inject('ChatsRepository')
    private chatsRepository: IChatsRepository,
  ) {}

  public async execute(id: string): Promise<Chat> {
    const findChat = await this.chatsRepository.findById(id);

    if (!findChat) {
      throw new Error('Chat não encontrado');
    }

    return findChat;
  }
}

export default ListChatByIdService;
