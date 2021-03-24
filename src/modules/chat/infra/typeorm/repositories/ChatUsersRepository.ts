import { getRepository, Repository } from 'typeorm';
import ICreateUserDTO from '../../../dtos/ICreateChatDTO';
import ICreateChatUserDTO from '../../../dtos/ICreateChatUserDTO';
import IChatUsersRepository from '../../../repositories/IChatUsersRepository';
import Chat from '../entities/Chat';
import ChatUser from '../entities/ChatUser';

class ChatUsersRepository implements IChatUsersRepository {
  private ormRepository: Repository<ChatUser>;

  constructor() {
    this.ormRepository = getRepository(ChatUser);
  }

  public async create({
    chat_id,
    user_id,
  }: ICreateChatUserDTO): Promise<ChatUser> {
    const chatUser = this.ormRepository.create({
      user_id,
      chat_id,
    });

    await this.ormRepository.save(chatUser);

    return chatUser;
  }

  public async findByChat(chat_id: string): Promise<ChatUser | undefined> {
    return this.ormRepository.findOne({ where: { chat_id } });
  }

  public async findByUser({
    user_id,
    chat_id,
  }: ICreateChatUserDTO): Promise<ChatUser | undefined> {
    return this.ormRepository.findOne({
      where: { chat_id, user_id },
    });
  }
}

export default ChatUsersRepository;
