import { inject, injectable } from 'tsyringe';
import ICreateChatDTO from '../dtos/ICreateChatDTO';
import Chat from '../infra/typeorm/entities/Chat';
import IChatsRepository from '../repositories/IChatsRepository';

@injectable()
class CreateChatService {
  constructor(
    @inject('ChatsRepository')
    private chatsRepository: IChatsRepository,
  ) {}

  public async execute({ name }: ICreateChatDTO): Promise<Chat> {
    const chat = await this.chatsRepository.create({
      name,
    });

    return chat;
  }
}

export default CreateChatService;
