import { ICreateComplimentsDTO } from '../dtos/ICreateComplimentsDTO';
import { ICompliment } from '../models/ICompliment';

interface IComplimentsRepository {
  create(data: ICreateComplimentsDTO): Promise<ICompliment>;
  findAllUserReceive(user_id: string): Promise<ICompliment[]>;
  findAllUserSend(user_id: string): Promise<ICompliment[]>;
}

export { IComplimentsRepository };
