import { ITag } from '@modules/tags/domain/models/ITag';
import { ITagsRepository } from '@modules/tags/domain/repositories/ITagsRepository';
import { getRepository, Repository } from 'typeorm';
import { Tag } from '../entities/Tag';

class TagsRepository implements ITagsRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = getRepository(Tag);
  }

  async create(name: string): Promise<void> {
    const tag = this.repository.create({
      name,
    });

    await this.repository.save(tag);
  }

  async findByName(name: string): Promise<ITag | undefined> {
    const tag = await this.repository.findOne({ name });

    return tag;
  }
}

export { TagsRepository };
