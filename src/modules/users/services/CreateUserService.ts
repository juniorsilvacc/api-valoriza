import { ICreateUserDTO } from '../domain/dtos/ICreateUserDTO';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IBcryptHashProvider } from '../providers/HashProvider/models/IBcryptHashProvider';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('BcryptHashProvider')
    private bcryptHashProvider: IBcryptHashProvider,
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

    const passwordHash = await this.bcryptHashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      admin,
    });

    return user;
  }
}

export { CreateUserService };
