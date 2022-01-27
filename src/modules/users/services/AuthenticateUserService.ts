import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { IBcryptHashProvider } from '../providers/HashProvider/models/IBcryptHashProvider';

import { sign } from 'jsonwebtoken';

import auth from '@config/auth';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };

  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('BcryptHashProvider')
    private bcryptHashProvider: IBcryptHashProvider,
  ) {}

  async execute({ email, password }: IAuthenticateRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect.', 404);
    }

    const passwordMatch = await this.bcryptHashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect', 401);
    }

    const token = sign({ email: user.email }, auth.jwt.secret, {
      subject: user.id,
      expiresIn: auth.jwt.expiresIn,
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },

      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserService };
