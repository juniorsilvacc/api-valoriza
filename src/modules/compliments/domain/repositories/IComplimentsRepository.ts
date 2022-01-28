import { ICreateComplimentsDTO } from '../dtos/ICreateComplimentsDTO';
import { ICompliment } from '../models/ICompliment';

interface IComplimentsRepository {
  create(data: ICreateComplimentsDTO): Promise<ICompliment>;
}

export { IComplimentsRepository };
