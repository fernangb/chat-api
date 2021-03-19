import { inject, injectable } from 'tsyringe';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    email,
    password,
    born_date,
  }: ICreateUserDTO): Promise<User> {
    const findUser = await this.usersRepository.findByEmail(email);

    if (findUser) {
      throw new Error('This e-mail already exists');
    }

    const hashedPassword = await this.hashProvider.createHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      born_date,
    });

    return user;
  }
}

export default CreateUserService;
