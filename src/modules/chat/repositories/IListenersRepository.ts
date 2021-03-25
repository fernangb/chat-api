import ICreateListenerDTO from '../dtos/ICreateListenerDTO';
import Listener from '../infra/typeorm/entities/Listener';

export default interface IListenersRepository {
  create(data: ICreateListenerDTO): Promise<Listener>;
  delete(id: string): Promise<void>;
  find(chat_id: string): Promise<Listener[]>;
  findById(chat_id: string): Promise<Listener | undefined>;
  findByName(data: ICreateListenerDTO): Promise<Listener | undefined>;
}
