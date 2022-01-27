import { ICreateUserDTO } from '../domain/dtos/ICreateUserDTO';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    admin,
  }: ICreateUserDTO): Promise<void> {
    if (!email) {
      throw new AppError('Email incorrect.');
    }

    const userEmail = await this.usersRepository.findByEmail(email);

    if (userEmail) {
      throw new AppError('User already exists.');
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password,
      admin,
    });

    return user;
  }
}

export { CreateUserService };
