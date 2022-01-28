import { IComplimentsRepository } from '@modules/compliments/domain/repositories/IComplimentsRepository';
import { ComplimentsRepository } from '@modules/compliments/infra/typeorm/repositories/ComplimentsRepository';
import { ITagsRepository } from '@modules/tags/domain/repositories/ITagsRepository';
import { TagsRepository } from '@modules/tags/infra/typeorm/repositories/TagsRepository';
import { IUsersRepository } from '@modules/users/domain/repositories/IUsersRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';

import '@modules/users/providers';

import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ITagsRepository>('TagsRepository', TagsRepository);

container.registerSingleton<IComplimentsRepository>(
  'ComplimentsRepository',
  ComplimentsRepository,
);
