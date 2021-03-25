import ICreateMessageDTO from '../dtos/ICreateMessageDTO';
import Message from '../infra/typeorm/entities/Message';

export default interface IMessagesRepository {
  create(data: ICreateMessageDTO): Promise<Message>;
  find(chat_id: string): Promise<Message[]>;
  orderByDate(messages: Message[]): Promise<Message[]>;
}
