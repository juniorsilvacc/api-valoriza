import { CreateComplimentService } from '@modules/compliments/services/CreateComplimentService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CreateComplimentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { message, user_sender, user_receiver, tag_id } = request.body;

    const createComplimentService = container.resolve(CreateComplimentService);

    const compliment = await createComplimentService.execute({
      message,
      user_sender,
      user_receiver,
      tag_id,
    });

    return response.json(compliment);
  }
}

export { CreateComplimentController };
