import { getRepository, Repository } from 'typeorm';
import ICreateChatDTO from '../../../dtos/ICreateChatDTO';
import IChatsRepository from '../../../repositories/IChatsRepository';
import Chat from '../entities/Chat';

class ChatsRepository implements IChatsRepository {
  private ormRepository: Repository<Chat>;

  constructor() {
    this.ormRepository = getRepository(Chat);
  }

  public async create({ name }: ICreateChatDTO): Promise<Chat> {
    const chat = this.ormRepository.create({
      name,
      users: 1,
      listeners: 0,
      open: true,
    });

    await this.ormRepository.save(chat);

    return chat;
  }

  public async index(): Promise<Chat[]> {
    return this.ormRepository.find();
  }
}

export default ChatsRepository;
