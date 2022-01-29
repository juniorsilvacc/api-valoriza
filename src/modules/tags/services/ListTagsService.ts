import { inject, injectable } from 'tsyringe';
import { ITag } from '../domain/models/ITag';
import { ITagsRepository } from '../domain/repositories/ITagsRepository';

@injectable()
class ListTagsService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  async execute(): Promise<ITag[]> {
    const tags = await this.tagsRepository.findAllTags();

    return tags;
  }
}

export { ListTagsService };
