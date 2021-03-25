import ICreateChatUserDTO from '../dtos/ICreateChatUserDTO';
import ChatUser from '../infra/typeorm/entities/ChatUser';

export default interface IChatUsersRepository {
  create(data: ICreateChatUserDTO): Promise<ChatUser>;
  delete(id: string): Promise<void>;
  findByChat(id: string): Promise<ChatUser | undefined>;
  findByUser(data: ICreateChatUserDTO): Promise<ChatUser | undefined>;
  find(chat_id: string): Promise<ChatUser[]>;
}
