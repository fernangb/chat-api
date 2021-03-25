import { getRepository, Repository } from 'typeorm';
import ICreateMessageDTO from '../../../dtos/ICreateMessageDTO';
import IMessagesRepository from '../../../repositories/IMessagesRepository';
import Message from '../entities/Message';

class MessagesRepository implements IMessagesRepository {
  private ormRepository: Repository<Message>;

  constructor() {
    this.ormRepository = getRepository(Message);
  }

  public async create({
    chat_id,
    user_id,
    text,
  }: ICreateMessageDTO): Promise<Message> {
    const message = this.ormRepository.create({
      user_id,
      chat_id,
      text,
    });

    await this.ormRepository.save(message);

    return message;
  }

  public async find(chat_id: string): Promise<Message[]> {
    return this.ormRepository.find({
      where: { chat_id },
    });
  }

  public async orderByDate(messages: Message[]): Promise<Message[]> {
    return messages.sort((a, b) => (a.created_at > b.created_at ? 1 : -1));
  }
}

export default MessagesRepository;
