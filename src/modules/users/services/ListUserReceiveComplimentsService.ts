import { ICompliment } from '@modules/compliments/domain/models/ICompliment';
import { IComplimentsRepository } from '@modules/compliments/domain/repositories/IComplimentsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListUserReceiveComplimentsService {
  constructor(
    @inject('ComplimentsRepository')
    private complimentsRepository: IComplimentsRepository,
  ) {}

  async execute(user_id: string): Promise<ICompliment[]> {
    const complients = await this.complimentsRepository.findAllUserReceive(
      user_id,
    );

    return complients;
  }
}

export { ListUserReceiveComplimentsService };
