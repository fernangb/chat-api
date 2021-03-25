import { inject, injectable } from 'tsyringe';
import ICreateListenerDTO from '../dtos/ICreateListenerDTO';
import IChatsRepository from '../repositories/IChatsRepository';
import IListenersRepository from '../repositories/IListenersRepository';

@injectable()
class DeleteChatUserService {
  constructor(
    @inject('ListenersRepository')
    private listenersRepository: IListenersRepository,
    @inject('ChatsRepository')
    private chatsRepository: IChatsRepository,
  ) {}

  public async execute({ name, chat_id }: ICreateListenerDTO): Promise<void> {
    const findListener = await this.listenersRepository.findByName({
      name,
      chat_id,
    });

    if (!findListener) {
      throw new Error('Ouvinte não encontrado');
    }

    const findChat = await this.chatsRepository.findById(chat_id);

    if (!findChat) {
      throw new Error('Chat não encontrado');
    }

    await this.chatsRepository.goOutListenerChat({ chat: findChat });

    await this.listenersRepository.delete(findListener.id);
  }
}

export default DeleteChatUserService;
