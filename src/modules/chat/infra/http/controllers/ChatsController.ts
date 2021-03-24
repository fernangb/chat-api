import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import CreateChatService from '../../../services/CreateChatService';
import ListChatsService from '../../../services/ListChatsService';

export default class ChatsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name } = request.body;

      const createChat = container.resolve(CreateChatService);

      const chat = await createChat.execute({
        name,
      });

      return response.json(classToClass(chat));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listChats = container.resolve(ListChatsService);

    const chats = await listChats.execute();

    return response.json(classToClass(chats));
  }
}
