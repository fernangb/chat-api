import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import AuthenticateUserService from '../../../services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const autenthicatedUser = container.resolve(AuthenticateUserService);

    const { user, token } = await autenthicatedUser.execute({
      email,
      password,
    });

    return response.json({
      user: classToClass(user),
      token,
    });
  }
}
