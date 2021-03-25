import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import CreateListenerService from '../../../services/CreateListenerService';
import ListListenersService from '../../../services/ListListenersService';
import DeleteListenerService from '../../../services/DeleteListenerService';

export default class ListenersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { chat_id, name } = request.body;

      const createListener = container.resolve(CreateListenerService);

      const listener = await createListener.execute({ chat_id, name });

      return response.json(classToClass(listener));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listListeners = container.resolve(ListListenersService);

    const listeners = await listListeners.execute(id);

    return response.json(classToClass(listeners));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { chat_id, name } = request.body;

      const deleteListener = container.resolve(DeleteListenerService);

      await deleteListener.execute({ chat_id, name });

      return response.json({ message: 'Ouvinte saiu do chat.' });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
