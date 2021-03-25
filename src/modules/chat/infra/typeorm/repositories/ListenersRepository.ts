import { getRepository, Repository } from 'typeorm';
import ICreateListenerDTO from '../../../dtos/ICreateListenerDTO';
import IListenersRepository from '../../../repositories/IListenersRepository';
import Listener from '../entities/Listener';

class ListenersRepository implements IListenersRepository {
  private ormRepository: Repository<Listener>;

  constructor() {
    this.ormRepository = getRepository(Listener);
  }

  public async create({
    name,
    chat_id,
  }: ICreateListenerDTO): Promise<Listener> {
    return this.ormRepository.create({ name, chat_id });
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async find(chat_id: string): Promise<Listener[]> {
    return this.ormRepository.find({ where: { chat_id } });
  }

  public async findById(chat_id: string): Promise<Listener | undefined> {
    return this.ormRepository.findOne({ where: { chat_id } });
  }

  public async findByName({
    name,
    chat_id,
  }: ICreateListenerDTO): Promise<Listener | undefined> {
    return this.ormRepository.findOne({ where: { chat_id, name } });
  }
}

export default ListenersRepository;
