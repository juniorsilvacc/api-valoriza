import { ITag } from '../models/ITag';

interface ITagsRepository {
  create(name: string): Promise<void>;
  findByName(name: string): Promise<ITag | undefined>;
  findAllTags(): Promise<ITag[]>;
}

export { ITagsRepository };
