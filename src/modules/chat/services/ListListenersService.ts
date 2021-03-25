import { inject, injectable } from 'tsyringe';
import Listener from '../infra/typeorm/entities/Listener';
import IListenersRepository from '../repositories/IListenersRepository';

@injectable()
class ListListenersService {
  constructor(
    @inject('ListenersRepository')
    private listenersRepository: IListenersRepository,
  ) {}

  public async execute(id: string): Promise<Listener[]> {
    return this.listenersRepository.find(id);
  }
}

export default ListListenersService;
