import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IComplimentsRepository } from '../domain/repositories/IComplimentsRepository';
import { ICreateComplimentsDTO } from '../domain/dtos/ICreateComplimentsDTO';
import { ICompliment } from '../domain/models/ICompliment';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';

@injectable()
class CreateComplimentService {
  constructor(
    @inject('ComplimentsRepository')
    private complimentsRepository: IComplimentsRepository,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    message,
    user_sender,
    user_receiver,
    tag_id,
  }: ICreateComplimentsDTO): Promise<ICompliment> {
    if (user_sender === user_receiver) {
      throw new AppError('Incorrect user receiver');
    }

    const userReceiverExists = await this.usersRepository.findById(
      user_receiver,
    );

    if (!userReceiverExists) {
      throw new AppError('User receiver does not exists', 404);
    }

    const compliment = await this.complimentsRepository.create({
      message,
      user_sender,
      user_receiver,
      tag_id,
    });

    return compliment;
  }
}

export { CreateComplimentService };
