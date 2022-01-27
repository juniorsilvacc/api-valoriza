import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { ITagsRepository } from '../domain/repositories/ITagsRepository';

@injectable()
class CreateTagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository,
  ) {}

  async execute(name: string): Promise<void> {
    if (!name) {
      throw new AppError('Name incorrect.');
    }

    const tagName = await this.tagsRepository.findByName(name);

    if (tagName) {
      throw new AppError('Tag already exists.');
    }

    const tag = await this.tagsRepository.create(name);

    return tag;
  }
}

export { CreateTagService };
