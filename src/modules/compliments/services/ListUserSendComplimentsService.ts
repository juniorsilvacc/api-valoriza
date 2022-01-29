import { inject, injectable } from 'tsyringe';
import { IComplimentsRepository } from '../domain/repositories/IComplimentsRepository';
import { ICompliment } from '../domain/models/ICompliment';

@injectable()
class ListUserSendComplimentsService {
  constructor(
    @inject('ComplimentsRepository')
    private complimentsRepository: IComplimentsRepository,
  ) {}

  async execute(user_id: string): Promise<ICompliment[]> {
    const complients = await this.complimentsRepository.findAllUserSend(
      user_id,
    );

    return complients;
  }
}

export { ListUserSendComplimentsService };
