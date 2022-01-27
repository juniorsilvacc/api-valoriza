import { container } from 'tsyringe';
import { BcryptHashProvider } from './HashProvider/implementations/BcryptHashProvider';
import { IBcryptHashProvider } from './HashProvider/models/IBcryptHashProvider';

container.registerSingleton<IBcryptHashProvider>(
  'BcryptHashProvider',
  BcryptHashProvider,
);
