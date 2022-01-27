import { compare, hash } from 'bcrypt';
import { IBcryptHashProvider } from '../models/IBcryptHashProvider';

class BcryptHashProvider implements IBcryptHashProvider {
  async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export { BcryptHashProvider };
