import { inject, injectable } from 'tsyringe';
import Chat from '../infra/typeorm/entities/Chat';
import IChatsRepository from '../repositories/IChatsRepository';

@injectable()
class ListChatsService {
  constructor(
    @inject('ChatsRepository')
    private chatsRepository: IChatsRepository,
  ) {}

  public async execute(): Promise<Chat[]> {
    return this.chatsRepository.index();
  }
}

export default ListChatsService;
