import { ICreateComplimentsDTO } from '@modules/compliments/domain/dtos/ICreateComplimentsDTO';
import { ICompliment } from '@modules/compliments/domain/models/ICompliment';
import { IComplimentsRepository } from '@modules/compliments/domain/repositories/IComplimentsRepository';
import { getRepository, Repository } from 'typeorm';
import { Compliment } from '../entities/Compliment';

class ComplimentsRepository implements IComplimentsRepository {
  private repository: Repository<Compliment>;

  constructor() {
    this.repository = getRepository(Compliment);
  }

  async create({
    message,
    user_sender,
    user_receiver,
    tag_id,
  }: ICreateComplimentsDTO): Promise<ICompliment> {
    const compliment = this.repository.create({
      message,
      user_sender,
      user_receiver,
      tag_id,
    });

    await this.repository.save(compliment);

    return compliment;
  }
}

export { ComplimentsRepository };
