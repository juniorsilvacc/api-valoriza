import { CreateUserService } from '@modules/users/services/CreateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, admin } = request.body;

    const createUserService = container.resolve(CreateUserService);

    await createUserService.execute({
      name,
      email,
      password,
      admin,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
