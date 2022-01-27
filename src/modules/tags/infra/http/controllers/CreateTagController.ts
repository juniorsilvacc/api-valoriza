import { CreateTagService } from '@modules/tags/services/CreateTagService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateTagController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createTagService = container.resolve(CreateTagService);

    await createTagService.execute(name);

    return response.status(201).send();
  }
}

export { CreateTagController };
