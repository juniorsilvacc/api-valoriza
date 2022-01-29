import { ListTagsService } from '@modules/tags/services/ListTagsService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class ListTagsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTagsService = container.resolve(ListTagsService);

    const tags = await listTagsService.execute();

    return response.json(tags);
  }
}

export { ListTagsController };
