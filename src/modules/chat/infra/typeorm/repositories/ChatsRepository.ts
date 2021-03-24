import { getRepository, Repository } from 'typeorm';
import ICreateChatDTO from '../../../dtos/ICreateChatDTO';
import IJoinChatDTO from '../../../dtos/IJoinChatDTO';
import IChatsRepository from '../../../repositories/IChatsRepository';
import Chat from '../entities/Chat';

class ChatsRepository implements IChatsRepository {
  private ormRepository: Repository<Chat>;

  constructor() {
    this.ormRepository = getRepository(Chat);
  }

  public async findById(id: string): Promise<Chat | undefined> {
    const chat = await this.ormRepository.findOne(id);

    return chat;
  }

  public async joinChat({ chat }: IJoinChatDTO): Promise<void> {
    const usersNumber = chat.users + 1;

    const updatedChat = { ...chat, users: usersNumber };

    await this.ormRepository.save(updatedChat);
  }

  public async create({ chat_name, user_id }: ICreateChatDTO): Promise<Chat> {
    const chat = this.ormRepository.create({
      name: chat_name,
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
