import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import ListChatByIdService from '../../../services/ListChatByIdService';

export default class ChatByIdController {
  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const listChat = container.resolve(ListChatByIdService);

      const chat = await listChat.execute(id);

      return response.json(classToClass(chat));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
