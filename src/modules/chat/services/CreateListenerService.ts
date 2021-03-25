import { inject, injectable } from 'tsyringe';
import ICreateListenerDTO from '../dtos/ICreateListenerDTO';
import Listener from '../infra/typeorm/entities/Listener';
import IChatsRepository from '../repositories/IChatsRepository';
import IListenersRepository from '../repositories/IListenersRepository';

@injectable()
class CreateListenerService {
  constructor(
    @inject('ChatsRepository')
    private chatsRepository: IChatsRepository,
    @inject('ListenersRepository')
    private listenersRepository: IListenersRepository,
  ) {}

  public async execute({
    name,
    chat_id,
  }: ICreateListenerDTO): Promise<Listener> {
    const findChat = await this.chatsRepository.findById(chat_id);

    if (!findChat) {
      throw new Error('Chat não cadastrado');
    }

    const listener = await this.listenersRepository.create({
      chat_id,
      name,
    });

    if (findChat) {
      await this.chatsRepository.joinListenerChat({ chat: findChat });
    }

    console.log(listener);

    return listener;
  }
}

export default CreateListenerService;
