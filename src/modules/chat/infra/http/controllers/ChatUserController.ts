import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import JoinChatService from '../../../services/CreateChatUserService';

export default class ChatUsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { chat_id, user_id } = request.body;

      const createChat = container.resolve(JoinChatService);

      const chat = await createChat.execute({ chat_id, user_id });

      return response.json(classToClass(chat));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  // public async index(request: Request, response: Response): Promise<Response> {
  //   const listChats = container.resolve(ListChatsService);

  //   const chats = await listChats.execute();

  //   return response.json(classToClass(chats));
  // }
}
