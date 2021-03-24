import { inject, injectable } from 'tsyringe';
import ChatUser from '../infra/typeorm/entities/ChatUser';
import IChatUsersRepository from '../repositories/IChatUsersRepository';

@injectable()
class ListChatUsersService {
  constructor(
    @inject('ChatUsersRepository')
    private chatUsersRepository: IChatUsersRepository,
  ) {}

  public async execute(id: string): Promise<ChatUser[]> {
    return this.chatUsersRepository.find(id);
  }
}

export default ListChatUsersService;
