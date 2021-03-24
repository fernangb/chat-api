import ICreateChatDTO from '../dtos/ICreateChatDTO';
import IJoinChatDTO from '../dtos/IJoinChatDTO';
import Chat from '../infra/typeorm/entities/Chat';

export default interface IUsersRepository {
  create(data: ICreateChatDTO): Promise<Chat>;
  index(): Promise<Chat[]>;
  findById(id: string): Promise<Chat | undefined>;
  joinChat(data: IJoinChatDTO): Promise<void>;
}
