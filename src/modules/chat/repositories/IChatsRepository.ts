import ICreateChatDTO from '../dtos/ICreateChatDTO';
import Chat from '../infra/typeorm/entities/Chat';

export default interface IUsersRepository {
  create(data: ICreateChatDTO): Promise<Chat>;
  index(): Promise<Chat[]>;
}
