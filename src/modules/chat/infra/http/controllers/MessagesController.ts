import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import CreateMessageService from '../../../services/CreateMessageService';
import ListMessagesService from '../../../services/ListMessagesService';

export default class MessagesController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { chat_id, user_id, text } = request.body;

      const createMessage = container.resolve(CreateMessageService);

      const message = await createMessage.execute({ chat_id, user_id, text });

      return response.json(classToClass(message));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async index(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const listMessages = container.resolve(ListMessagesService);

      const messages = await listMessages.execute(id);

      return response.json(classToClass(messages));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
