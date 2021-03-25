import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import CreateChatUserService from '../../../services/CreateChatUserService';
import ListChatUsersService from '../../../services/ListChatUsersService';
import DeleteChatUserService from '../../../services/DeleteChatUserService';

export default class ChatUsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { chat_id, user_id } = request.body;

      const createChat = container.resolve(CreateChatUserService);

      const chat = await createChat.execute({ chat_id, user_id });

      return response.json(classToClass(chat));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listChats = container.resolve(ListChatUsersService);

    const chats = await listChats.execute(id);

    return response.json(classToClass(chats));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { chat_id, user_id } = request.body;

      const deleteChat = container.resolve(DeleteChatUserService);

      await deleteChat.execute({ chat_id, user_id });

      return response.json({ message: 'Usuário saiu do chat' });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
